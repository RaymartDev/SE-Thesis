/* eslint-disable no-unused-vars */
import { createSlice, original } from '@reduxjs/toolkit'

const initialState = {
    jobsInfo: [],
    myJobs: [],
    savedJobs: [],
    completedJobs: [],
    proposals: []
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob:(state, action) => {
            state.jobsInfo.unshift(action.payload)
        },
        // eslint-disable-next-line no-unused-vars
        setJob: (state, action) => {
            state.jobsInfo = action.payload
        },
        clearJob: (state, action) => {
            state.jobsInfo = null
            state.myJobs = null
            state.savedJobs = null
            state.completedJobs = null
            state.proposals = null
        },
        setMyJob: (state, action) => {
            state.myJobs = action.payload
        },
        addMyJob: (state, action) => {
            state.myJobs.unshift(action.payload)
        },
        updateJob: (state, action) => {
            for(let i = 0; i < state.jobsInfo.length; i++) {
                if(String(state.jobsInfo[i]._id ) === String(action.payload._id)) {
                    state.jobsInfo[i] = action.payload
                    break
                }
                if(String(state.myJobs[i]._id) === String(action.payload._id)) {
                    state.myJobs[i] = action.payload
                    break
                }
            }
        },
        addProposal: (state, action) => {
            const job = state.jobsInfo
                            .find((jobInfo) => String(jobInfo._id) === String(action.payload.job))
            job.proposals.unshift(action.payload)
        },
        removeProposal: (state, action) => {

            const job = state.jobsInfo
                            .find((jobInfo) => String(jobInfo._id) === String(action.payload.job))

            job.proposals = job.proposals.filter((proposal) => String(proposal._id) !== String(action.payload._id))

            const myJobs = state.myJobs
                            .find((jobInfo) => String(jobInfo._id) === String(action.payload.job))

            myJobs.proposals = myJobs.proposals.filter((proposal) => String(proposal._id) !== String(action.payload._id))
            state.proposals = state.proposals.filter((proposal) => String(proposal._id) !== String(action.payload._id))
        },
        addSaveJob: (state, action) => {
            state.savedJobs.unshift(action.payload)
        },
        setSaveJob: (state, action) => {
            state.savedJobs = action.payload
        },
        setCompleteJob: (state, action) => {
            state.completedJobs = action.payload
        },
        addCompleteJob: (state, action) => {
            state.completedJobs.unshift(action.payload)
        },
        setProposal: (state, action) => {
            state.proposals = action.payload
        },
        clearProposal: (state, action) => {
            state.proposals = []
        },
        removeJob: (state, action) => {
            state.jobsInfo = state.jobsInfo.filter((job) => String(job._id) !== String(action.payload))
        }
    }
})

export const { removeJob, clearProposal, setProposal, setCompleteJob,setSaveJob, addJob ,setJob, clearJob, setMyJob, addMyJob, updateJob, addProposal, removeProposal, addSaveJob } = jobSlice.actions

export default jobSlice.reducer