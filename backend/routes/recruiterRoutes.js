const express = require('express');
const router = express.Router();
const RecruiterController = require('../controllers/recruiterController');

const recruiterController = new RecruiterController();

// Route to get all applicants
router.get('/applicants', recruiterController.getAllApplicants);

// Route to get a specific applicant by ID
router.get('/applicants/:id', recruiterController.getApplicantById);

// Route to create a new applicant
router.post('/applicants', recruiterController.createApplicant);

// Route to update an applicant by ID
router.put('/applicants/:id', recruiterController.updateApplicant);

// Route to delete an applicant by ID
router.delete('/applicants/:id', recruiterController.deleteApplicant);

module.exports = router;