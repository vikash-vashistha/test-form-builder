const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question.controller');

// Define routes for questions
router.get('/questions', questionController.getAllQuestions);
router.post('/questions', questionController.createQuestion);
router.get('/questions/:id', questionController.getQuestionById);
router.put('/questions/:id', questionController.updateQuestionById);
router.delete('/questions/:id', questionController.deleteQuestionById);

module.exports = router;
