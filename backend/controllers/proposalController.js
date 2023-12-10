import asyncHandler from 'express-async-handler'
import Proposal from '../models/proposalModel.js'
import Job from '../models/jobModel.js'
import User from '../models/userModel.js'

const newProposal = asyncHandler(async(req, res) => {
    const user = await User.findOne({_id: req.user._id})

    if(!user) {
        res.status(404)
        throw new Error('User not found')
    }
    if(user.role === 'client') {
        res.status(400)
        throw new Error('Could not send a proposal using client account')
    }

    const { message, jobID } = req.body

    const job = await Job.findOne({_id: jobID})

    if(!job) {
        res.status(404)
        throw new Error('Could not find Request')
    }

    const proposalExist = await Proposal.findOne({owner: req.user._id, job: job._id})

    if(proposalExist) {
        res.status(400)
        throw new Error('Proposal already sent')
    }

    const proposal = await Proposal.create({
        body:message,
        owner: req.user._id,
        job: job._id
    })


    job.proposals.unshift(proposal)
    await job.save()
    if(proposal) {
        res.status(201).json(proposal)
    } else {
        res.status(500)
        throw new Error('Something went wrong')
    }

})

const getProposal = asyncHandler(async (req, res) => {
    const { id } = req.params

    const job = await Job.findOne({_id: id})
                                .populate({
                                    path: 'proposals',
                                    select: '_id body owner job',
                                    populate: {
                                        path: 'owner',
                                        select: '_id name'
                                    }
                                })

    if(!job) {
        res.status(404)
        throw new Error('Could not find Request')
    }

    res.status(200).json(job)
})

const deleteProposal = asyncHandler(async (req, res) => {
    const { id } = req.body

    const proposal = await Proposal.findOneAndDelete({ _id: id})

    if(!proposal) {
        res.status(404)
        throw new Error('Could not find Proposal')
    }

    const job = await Job.findOne(proposal.job)

    job.proposals = job.proposals.filter((proposal) => String(proposal) !== String(proposal._id))
    await job.save()

    res.status(200).json({proposal, message: 'Successfully deleted Proposal'})

})

const approveProposal = asyncHandler(async (req, res) => {
    const { proposalID, ownerID } = req.body

    const proposal = await Proposal.findOne({ _id: proposalID }).populate('job')

    if(!proposal) {
        res.status(404)
        throw new Error('Could not find Proposal')
    }

    const user = await User.findOne({ _id: ownerID })

    if(!user) {
        res.status(404)
        throw new Error('Could not find User')
    }

    const job = await Job.findOne({_id : proposal.job._id })

    if(!job) {
        res.status(404)
        throw new Error('Could not find Job')
    }

    user.jobs.unshift(job._id)
    await user.save()
    job.status = 2
    job.proposals = []
    job.employee = ownerID
    await job.save()

    await Proposal.deleteMany({ job : job._id })

    res.status(200).json({ message: 'Successfully chosen a freelancer'})
})

export {
    newProposal,
    deleteProposal,
    getProposal,
    approveProposal
}