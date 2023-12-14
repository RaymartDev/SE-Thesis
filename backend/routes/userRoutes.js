import express from 'express'
const router = express.Router()
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateProfile,
    createJob,
    saveJob,
    searchJob,
    getAllAvailableJobs,
    getAllJobs,
    getSavedJobs,
    getCompletedJobs,
    updateJob,
    getOtherProfile
} from '../controllers/userController.js'
import {
    newProposal,
    getProposal,
    deleteProposal,
    approveProposal,
} from '../controllers/proposalController.js'
import { protect } from '../middleware/authMiddleware.js'
import { newReport, getReport } from '../controllers/reportController.js'

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

// profile related routes
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateProfile)

router.get('/other/:id', protect, getOtherProfile)

// job related routes
router.get('/jobs', protect, searchJob)
router.post('/jobs/create', protect , createJob)
router.post('/jobs/save', protect, saveJob)
router.get('/jobs/all', protect, getAllAvailableJobs)
router.put('/jobs/update', protect, updateJob)

// own methods
router.get('/jobs/own/save', protect, getSavedJobs)
router.get('/jobs/own/all', protect, getAllJobs)
router.get('/jobs/own/complete', protect, getCompletedJobs)

// proposal methods
router.get('/proposal/:id', protect, getProposal)
router.post('/proposal', protect, newProposal)
router.delete('/proposal', protect, deleteProposal)
router.post('/proposal/approve', protect, approveProposal)

// report methods
router.get('/report', protect, getReport)
router.post('/report', protect, newReport)

export default router