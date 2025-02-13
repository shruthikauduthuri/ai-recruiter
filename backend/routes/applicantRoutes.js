const express = require('express');
const router = express.Router();
const ApplicantController = require('../controllers/applicantController');

const applicantController = new ApplicantController();

// Define routes for applicant-related actions
router.post('/applicants', applicantController.createApplicant);
router.get('/applicants', applicantController.getAllApplicants);
router.get('/applicants/:id', applicantController.getApplicantById);
router.put('/applicants/:id', applicantController.updateApplicant);
router.delete('/applicants/:id', applicantController.deleteApplicant);

module.exports = router;