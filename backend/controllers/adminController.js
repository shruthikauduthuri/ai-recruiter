class AdminController {
    constructor(RecruiterModel) {
        this.RecruiterModel = RecruiterModel;
    }

    async addRecruiter(req, res) {
        try {
            const newRecruiter = new this.RecruiterModel(req.body);
            await newRecruiter.save();
            res.status(201).json({ message: 'Recruiter added successfully', recruiter: newRecruiter });
        } catch (error) {
            res.status(500).json({ message: 'Error adding recruiter', error });
        }
    }

    async removeRecruiter(req, res) {
        try {
            const { id } = req.params;
            await this.RecruiterModel.findByIdAndDelete(id);
            res.status(200).json({ message: 'Recruiter removed successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error removing recruiter', error });
        }
    }

    async listRecruiters(req, res) {
        try {
            const recruiters = await this.RecruiterModel.find();
            res.status(200).json(recruiters);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching recruiters', error });
        }
    }
}

module.exports = AdminController;