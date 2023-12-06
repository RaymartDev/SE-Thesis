import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
import validator from 'validator';
import Job from '../models/jobModel.js';
import multer from 'multer'

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
        role
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
    const { username, password } = req.body

    let user;
    if (validator.isEmail(username)) {
      user = await User.findOne({ email: username });
    } else {
      user = await User.findOne({ username: username.toLowerCase() });
    }
    if(user && (await user.matchPasswords(password))) {
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
            role: user.role,
        })
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

        user.password = req.body.password || user.password
        user.address = req.body.address || user.address
        user.contact = req.body.contact || user.contact
        user.birthDate = req.body.birthDate || user.birthDate
        user.language = req.body.language ? req.body.language.split(';') : user.language
        user.skills = req.body.skills ? req.body.skills.split(';') : user.skills
        user.payment = req.body.payment ? req.body.payment.split(';') : user.payment

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

        const attachments = req.files.map(file => file.path);

        const job = await Job.create({
            title,
            description,
            estimatedBudget,
            rate: req.body.rate ? req.body.rate : 0,
            expertise: req.body.expertise ? req.body.expertise.split(';') : [],
            skills: req.body.skills ? req.body.skills.split(';') : [],
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

    const job = await Job.findById(id)

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    if(!job) {
        res.status(404)
        throw new Error('Job not found')
    }
    if(String(job.owner) === String(user._id)) {
        res.status(403)
        throw new Error('You are not allowed to save your own request')
    }

    if(user.savedJobs.includes(job._id)) {
        res.status(409)
        throw new Error('Job is already saved')
    }

    user.savedJobs.push(job._id)
    await user.save()
    res.json(job)
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
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateProfile,
    getJob,
    createJob,
    saveJob,
    searchJob
}