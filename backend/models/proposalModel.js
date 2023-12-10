import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    }
})

const Proposal = mongoose.model('Proposal', proposalSchema)

export default Proposal 