import express from 'express'
const router = express.Router()
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router
    .route('/profile')
    .get(protect, getUserProfile)

export default router