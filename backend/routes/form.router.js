const express = require('express');
const router = express.Router();
const formController = require('../controllers/form.controller');

// Define routes for forms
router.get('/forms', formController.getAllForms);
router.post('/forms', formController.createForm);
router.get('/forms/:id', formController.getFormById);
router.put('/forms/:id', formController.updateFormById);
router.delete('/forms/:id', formController.deleteFormById);

module.exports = router;
