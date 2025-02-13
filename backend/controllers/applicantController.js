const Applicant = require('../models/applicant');

class ApplicantController {
    async createApplicant(req, res) {
        try {
            const applicant = new Applicant(req.body);
            await applicant.save();
            res.status(201).json(applicant);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getApplicants(req, res) {
        try {
            const applicants = await Applicant.find();
            res.status(200).json(applicants);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getApplicantById(req, res) {
        try {
            const applicant = await Applicant.findById(req.params.id);
            if (!applicant) {
                return res.status(404).json({ message: 'Applicant not found' });
            }
            res.status(200).json(applicant);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateApplicant(req, res) {
        try {
            const applicant = await Applicant.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!applicant) {
                return res.status(404).json({ message: 'Applicant not found' });
            }
            res.status(200).json(applicant);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteApplicant(req, res) {
        try {
            const applicant = await Applicant.findByIdAndDelete(req.params.id);
            if (!applicant) {
                return res.status(404).json({ message: 'Applicant not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ApplicantController();