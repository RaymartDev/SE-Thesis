import mongoose from 'mongoose'
import Proposal from './proposalModel.js'
import Report from './reportModel.js'

const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    estimatedBudget: {
        type: Number,
        required: true
    },
    rate: {
        type: Number,
        required: false,
        default: 0
    },
    expertise: {
        type: String, 
        required: false
    },
    skills: {
        type: [String],
        required: false
    },
    attachments: {
        type: [String],
        required: false
    },
    status: {
        type: Number,
        required: true
        /**
         * Status
         * 1 - Active
         * 2 - Pending / Being Worked On
         * 3 - Client Done
         * 4 - Employee Done
         * 5 - Completed
         */
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    proposals: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Proposal',
        required: false,
        onDelete: 'cascade'
    },
    reports: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Report',
        required: false,
        onDelete: 'cascade'
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
},
{
    timestamps: true
})

jobSchema.pre('remove', async function (next) {
    await Proposal.deleteMany({ job: this._id })
    await Report.deleteMany({ job: this._id })
    next()
})

const Job = mongoose.model('Job', jobSchema)

export default Job 