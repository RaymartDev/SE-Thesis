import express from 'express'
const router = express.Router()
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateProfile,
    getJob,
    createJob,
    saveJob,
    searchJob,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

// profile related routes
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateProfile)

// job related routes
router.get('/jobs/:page', protect,getJob)
router.get('/jobs', protect, searchJob)
router.post('/jobs/create', protect , createJob)
router.post('/jobs/save', protect, saveJob)

export default router