const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');

const adminController = new AdminController();

// Route to add a recruiter
router.post('/recruiters', adminController.addRecruiter);

// Route to remove a recruiter
router.delete('/recruiters/:id', adminController.removeRecruiter);

// Route to get all recruiters
router.get('/recruiters', adminController.getAllRecruiters);

module.exports = router;