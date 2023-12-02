import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
import validator from 'validator';

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, username, address, birthDate, contact, gender } = req.body

    const userExists = await User.findOne({ email })

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
        username,
        address,
        birthDate,
        contact,
        gender
    })

    if(user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            address: user.address,
            birthDate: user.birthDate,
            contact: user.contact,
            gender: user.gender
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    let user;
    if (validator.isEmail(username)) {
      user = await User.findOne({ email: username });
    } else {
      user = await User.findOne({ username });
    }
    if(user && (await user.matchPasswords(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            address: user.address,
            birthDate: user.birthDate,
            contact: user.contact,
            gender: user.gender
        })
    } else {
        res.status(401)
        throw new Error('Invalid credentials')
    }
})

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({ message: 'User logged out'} )
})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        username: req.user.username,
        address: req.user.address,
        birthDate: req.user.birthDate,
        contact: req.user.contact,
        gender: req.user.gender
    }

    res.status(200).json(user)
})

export {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile
}