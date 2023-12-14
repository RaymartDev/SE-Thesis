import asyncHandler from 'express-async-handler'
import Report from '../models/reportModel.js'
import Job from '../models/jobModel.js'
import User from '../models/userModel.js'

const newReport = asyncHandler(async(req, res) => {
    const user = await User.findOne({_id: req.user._id})

    if(!user) {
        res.status(404)
        throw new Error('User not found')
    }

    const { message, jobID } = req.body

    const job = await Job.findOne({_id: jobID})

    if(!job) {
        res.status(404)
        throw new Error('Could not find Request')
    }

    const reportExist = await Report.findOne({owner: req.user._id, job: job._id})

    if(reportExist) {
        res.status(400)
        throw new Error('Report already exists')
    }

    const report = await Report.create({
        body:message,
        owner: req.user._id,
        job: job._id
    })

    if(job.reports.length === 2) {
        const deletedJob = Job.findOneAndDelete({_id: job._id})
        res.status(200).json({deletedJob, message: 'Successfully deleted job'})
    }


    job.reports.unshift(report)
    await job.save()
    if(report) {
        res.status(201).json(report)
    } else {
        res.status(500)
        throw new Error('Something went wrong')
    }

})

const getReport = asyncHandler(async (req, res) => {
    const { id } = req.params

    const job = await Job.findOne({_id: id})
                                .populate({
                                    path: 'reports',
                                    select: '_id body owner job',
                                    populate: {
                                        path: 'owner',
                                        select: '_id name'
                                    }
                                })

    if(!job) {
        res.status(404)
        throw new Error('Could not find Report')
    }

    res.status(200).json(job)
})

export {
    newReport,
    getReport
}