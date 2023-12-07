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
        }
    }
})

export const { addJob ,setJob, clearJob, setMyJob, addMyJob } = jobSlice.actions

export default jobSlice.reducer