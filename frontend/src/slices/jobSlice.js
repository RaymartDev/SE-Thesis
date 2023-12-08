/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    jobsInfo: [],
    myJobs: []
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob:(state, action) => {
            state.jobsInfo.push(action.payload)
        },
        // eslint-disable-next-line no-unused-vars
        setJob: (state, action) => {
            state.jobsInfo = action.payload
        },
        clearJob: (state, action) => {
            state.jobsInfo = null
            state.myJobs = null
        },
        setMyJob: (state, action) => {
            state.myJobs = action.payload
        },
        addMyJob: (state, action) => {
            state.myJobs.push(action.payload)
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
    }
})

export const { addJob ,setJob, clearJob, setMyJob, addMyJob, updateJob } = jobSlice.actions

export default jobSlice.reducer