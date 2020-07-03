const admin = require('../middleware/admin');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const JobApplication = require("../models/job-application");


router.get('/', (req, res, next) => {
	JobApplication.findJobApplications().then(result => {
			if (!result || result.length === 0) // (optional) if empty array return 404 instead
				res.status(404).send(`No objects found`);
			else if (result instanceof Error)
				res.status(400).send(result.message);
			else
				res.send(result);
		})
		.catch(ex => next(ex)); // calling the Global Error Handler that's in app.js
});
router.get('/:id', auth, admin, (req, res) => {
	JobApplication.findOneJobApplication(req.params.id).then(result => {
			if (!result || result.length === 0) // (optional) if empty array return 404 instead
				res.status(404).send(`object with id: ${req.params.id} was not found`);
			else if (result instanceof Error)
				res.status(400).send(result.message);
			else
				res.send(result);
		})
		.catch(ex => next(ex)); // calling the Global Error Handler that's in app.js
});

router.post('/', (req, res) => {
	JobApplication.addJobApplication(req.body).then(result => {
			if (result instanceof Error)
				res.status(400).send(result.message);
			else
				res.send(result);
		})
		.catch(ex => next(ex)); // calling the Global Error Handler that's in app.js
});

module.exports = router;