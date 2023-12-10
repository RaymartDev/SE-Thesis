import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
import validator from 'validator';
import Job from '../models/jobModel.js';
import multer from 'multer'
import mongoose from 'mongoose';

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, username, address, birthDate, contact, gender, role } = req.body

    const emailExists = await User.findOne({ email })

    if(emailExists) {
        res.status(400)
        throw new Error('Email already exists')
    }

    const userExists = await User.findOne({ username: username.toLowerCase() })
    if(userExists) {
        res.status(400)
        throw new Error('Username already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
        username: username.toLowerCase(),
        address,
        birthDate,
        contact,
        gender,
        role,
    })

    if(user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            address: user.address,
            birthDate: user.birthDate,
            contact: user.contact,
            gender: user.gender,
            role: user.role
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { username, password, role } = req.body

    if (!username) {
        res.status(400)
        throw new Error('Insert Username')
    }

    if (!password) {
        res.status(400)
        throw new Error('Insert Password')
    }

    let user;
    if (validator.isEmail(username)) {
      user = await User.findOne({ email: username, role });
    } else {
      user = await User.findOne({ username: username.toLowerCase(), role });
    }
    if(user && (await user.matchPasswords(password))) {
        generateToken(res, user._id)
        if(validator.isEmail(username)) {
            user = await User.findOne({ email: username, role }).select('-password');
        } else {
            user = await User.findOne({ username: username.toLowerCase(), role }).select('-password');
        }
        res.status(201).json(user)
    } else {
        res.status(401)
        throw new Error('Invalid credentials')
    }
})

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({ message: 'User logged out'} )
})

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

const getOtherProfile = asyncHandler(async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400)
        throw new Error(`Invalid ID ${req.params.id}`)
    }

    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(404)
        throw new Error('User not found')
    }

    res.status(200).json(user)
})

const updateProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select('-password')
    const updatedEmail = req.body.email;

    if(user) {
        user.name = req.body.name || user.name

        if(updatedEmail) {
            const existingUser = await User.findOne({ email: updatedEmail });
            if (existingUser) {
                res.status(400)
                throw new Error('Email already exists')
            } else {
                user.email = updatedEmail
            }
        }
        if(req.body.password) {
            user.password = req.body.password
        }
        if(req.body.address) {
            user.address = req.body.address
        }
        if(req.body.contact) {
            user.contact = req.body.contact
        }
        if(req.body.birthDate) {
            user.birthDate = req.body.birthDate
        }
        if(req.body.language) {
            if(req.body.language.includes(';')) {
                user.language = req.body.language.split(';')
            } else {
                user.language = [req.body.language]
            }
        }
        if(req.body.skills) {
            if(req.body.skills.includes(';')) {
                user.skills = req.body.skills.split(';')
            } else {
                user.skills = [req.body.skills]
            }
        }
        if(req.body.payment) {
            if(req.body.payment.includes(';')) {
                user.payment = req.body.payment.split(';')
            } else {
                user.payment = [req.body.payment]
            }
        }

        if(req.body.education) {
            const education = [];
            const educationStrings = req.body.education.split(';');

            for (const educationString of educationStrings) {
                education.push(educationString);
            }
            user.education = education
        }

        const updatedUser = await user.save()

        res.json(updatedUser)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

const updateJob = asyncHandler(async(req, res) => {
    const job = await Job.findById(req.body._id).populate({
        path: 'owner',
        select: '-password'
    })
    const { title, description, estimatedBudget, rate, expertise } = req.body

    if(!job) {
        res.status(404)
        throw new Error('Job not found')
    }

    if(title) {
        job.title = title
    }
    if(description) {
        job.description = description
    }
    if(estimatedBudget) {
        job.estimatedBudget = estimatedBudget
    }
    if(rate) {
        job.rate = rate
    }
    if(expertise) {
        job.expertise
    }

    const updatedJob = await job.save()
    res.json(updatedJob)
})

const getJob = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).populate('jobs');

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const { jobs } = user;
    let page = parseInt(req.params.page) || 1; // Parse the page parameter as an integer
    const pageSize = 3;

    const maxPage = Math.ceil(jobs.length / pageSize);

    if (page < 1) {
        page = 1
    }
    if (page > maxPage) {
        page = maxPage
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const limitedJobs = jobs.slice(startIndex, endIndex);

    res.json({
        jobs: limitedJobs,
        currentPage: page,
        totalPages: maxPage,
    });
});

// get all own jobs
const getAllJobs = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).populate({
        path: 'jobs',
        populate: [{path: 'proposals'}, {path: 'employee', select: '_id name earnings jobs', populate: {path: 'jobs'}}],
        options: { sort: { updatedAt: -1 } },
    }).sort({updatedAt: -1});

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const { jobs } = user;

    res.json(jobs);
});

const getSavedJobs = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).populate({
        path: 'savedJobs',
        populate: [
            {path: 'owner', select: '-password'},
            {path: 'proposals'}
        ]
    }).select('-password');

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const jobs = user.savedJobs;

    res.json(jobs);
});

const getCompletedJobs = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const jobs = await Job.find({owner: user._id, status: 4})
    res.json(jobs);
})

const getAllAvailableJobs = asyncHandler(async (req, res) => {
    const jobs = await Job.find({})
                .populate([
                    {path: 'owner', select: '-password'},
                    {path: 'proposals'},
                    {path: 'employee'}
                ])
                .sort({updatedAt: -1})
    res.json(jobs);
});

const getAvailableJobs = asyncHandler(async (req,res) => {
    const jobs = await Job.find({})
    let page = parseInt(req.params.page) || 1; // Parse the page parameter as an integer
    const pageSize = 3;

    const maxPage = Math.ceil(jobs.length / pageSize);

    if (page < 1) {
        page = 1
    }
    if (page > maxPage) {
        page = maxPage
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const limitedJobs = jobs.slice(startIndex, endIndex);

    res.json({
        jobs: limitedJobs,
        currentPage: page,
        totalPages: maxPage,
    });
})

const isImage = file => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    return allowedExtensions.includes(fileExtension);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../uploads/'); // Set your desired destination folder
    },
    filename: function (req, file, cb) {
        cb(null, path.extname(file.originalname));
    }
})

const fileFilter = function (req, file, cb) {
    if (isImage(file)) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error('Only images are allowed'), false); // Reject the file
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

// client 
const createJob = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    const { title, description, estimatedBudget } = req.body;

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const jobExist = await Job.findOne({ title, owner: user._id });

    if (jobExist) {
        res.status(400);
        throw new Error('Job title already exists');
    }

    // Use multer to handle file uploads
    upload.array('attachments')(req, res, async function (err) {
        if (err) {
            res.status(500);
            throw new Error('Error uploading attachments');
        }

        let attachments = [""]
        if(req.files) {
            req.files.forEach((file) => attachments.push(file.path))
        }

        let skills = []
        if(req.body.skills) {
            if(req.body.skills.includes(';')) {
                skills = req.body.skills.split(';')
            } else {
                skills = [req.body.skills]
            }
        }

        if(!req.body.expertise) {
            res.status(400)
            throw new Error('Must choose at least one expertise')
        }
        

        const job = await Job.create({
            title,
            description,
            estimatedBudget,
            rate: req.body.rate ? req.body.rate : 0,
            expertise: req.body.expertise,
            skills,
            attachments,
            status: 1,
            owner: user._id,
        });

        if (job) {
            // Update user's job
            user.jobs.push(job);
            await user.save();

            res.json(job);
        } else {
            res.status(400);
            throw new Error('Invalid Job data');
        }
    });
});

const saveJob = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    const { id } = req.body

    const job = await Job.findById(id).populate({
        path: 'owner',
        select: '-password'
    })

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    if(!job) {
        res.status(404)
        throw new Error('Job not found')
    }
    if(user.role === 'client') {
        res.status(403)
        throw new Error('You are not allowed to save request using client account')
    }

    if(user.savedJobs.includes(job._id)) {
        res.status(409)
        throw new Error('Job is already saved')
    }

    user.savedJobs.unshift(job._id)
    await user.save()
    res.json({job, message: 'Job saved successfully'})
})

const searchJob = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const jobNameQuery = req.query.query;
    if (!jobNameQuery) {
        res.status(400)
        throw new Error('Missing query parameter')
    }

    const jobs = await Job.find({ title: { $regex: new RegExp(`.*${jobNameQuery}.*`, 'i') } });
    res.json(jobs)
})

export {
    // AUTH
    registerUser,
    loginUser,
    logoutUser,

    // PROFILE
    getUserProfile,
    updateProfile,
    getOtherProfile,

    // JOBS / REQUEST
    getJob,
    createJob,
    saveJob,
    searchJob,
    getAvailableJobs,
    getAllAvailableJobs,
    getAllJobs,
    getSavedJobs,
    getCompletedJobs,
    updateJob
}