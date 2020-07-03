const mongoose = require('mongoose');
const logger = require('../logger/logger');

const jobApplicationSchema = mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true,
		minlength: 2,
		maxlength: 50
	},
	age: {
		type: Number,
		required: true,
	},
	degree: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 20
	},
	field: {
		type: String,
		minlength: 2,
		maxlength: 20
	},
	totalYearsOfExperience: {
		type: Number,
		required: true
	},
	hadExperienceInFoodSales: {
		type: Boolean,
		required: true
	},
	yearsOfExperienceInFoodSales: {
		type: Number
	},
	hadExperienceInHoneySales: {
		type: Boolean,
		required: true
	},
	yearsOfExperienceInHoneySales: {
		type: Number
	},
	phone: {
		type: String,
		required: true,
		trim: true,
		minlength: 7,
		maxlength: 15
	},
	additinalInfo: {
		type: String,
		maxlength: 500
	}
});
JobApplication = mongoose.model('application', jobApplicationSchema, 'applications');

async function findJobApplications() {
	logger.log('info', 'findJobApplication');
	try {
		return await JobApplication.find();
	} catch (ex) {
		return ex;
	}
}
async function findOneJobApplication(id) {
	logger.log('info', `findOneJobApplication for id: ${id}`);
	try {
		return await JobApplication.findOne({
			_id: id
		});
	} catch (ex) {
		return ex;
	}
}

async function addJobApplication(_jobApplication) {
	logger.log('info', `addJobApplication attempt: ${JSON.stringify(_jobApplication)}`);
	try {
		const jobApplication = new JobApplication(_jobApplication);
		await jobApplication.validate();
		let result = await jobApplication.save();
		logger.log('info', `Job Application Added: ${JSON.stringify(_jobApplication)}`);
		return result;
	} catch (ex) {
		return ex;
	}
}


JobApplication.findJobApplications = findJobApplications;
JobApplication.findOneJobApplication = findOneJobApplication;
JobApplication.addJobApplication = addJobApplication;

module.exports = JobApplication;