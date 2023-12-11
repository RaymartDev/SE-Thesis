import { createSlice } from '@reduxjs/toolkit'
import { clearJob } from './jobSlice'

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    otherInfo: {}
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        // eslint-disable-next-line no-unused-vars
        logout: (state, action) => {
            state.userInfo = null
            state.otherInfo = null
            localStorage.removeItem('userInfo')
            clearJob()
        },
        setOtherInfo: (state, action) => {
            state.otherInfo = action.payload
        }
    }
})

export const { setCredentials,logout, setOtherInfo } = authSlice.actions

export default authSlice.reducer