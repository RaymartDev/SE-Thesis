import asyncHandler from 'express-async-handler'

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
})

const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Login User'})
})

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Logout User'})
})

export {
    registerUser,
    loginUser,
    logoutUser
}