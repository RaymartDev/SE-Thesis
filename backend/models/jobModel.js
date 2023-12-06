import mongoose from 'mongoose'

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
        type: [String], 
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
         * 2 - Cancelled
         * 3 - Completed
         */
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    candidates: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: false
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

const Job = mongoose.model('Job', jobSchema)

export default Job 