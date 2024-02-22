// questionController.js
const Question = require('../models/question.model');

// Controller method to get all questions
const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json({ success: true, questions: questions });
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ success: false, error: 'Error fetching questions' });
    }
};

// Controller method to create a question
const createQuestion = async (req, res) => {
    try {
        const { title, type, options } = req.body;
        const newQuestion = await Question.create({ title, type, options });
        res.json({ success: true, question: newQuestion });
    } catch (error) {
        console.error('Error creating question:', error);
        res.status(500).json({ success: false, error: 'Error creating question' });
    }
};

// Controller method to get a question by ID
const getQuestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findById(id);
        if (!question) {
            return res.status(404).json({ success: false, error: 'Question not found' });
        }
        res.json({ success: true, question: question });
    } catch (error) {
        console.error('Error fetching question by ID:', error);
        res.status(500).json({ success: false, error: 'Error fetching question by ID' });
    }
};

// Controller method to update a question by ID
const updateQuestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, type, options } = req.body;
        const updatedQuestion = await Question.findByIdAndUpdate(id, { title, type, options }, { new: true });
        if (!updatedQuestion) {
            return res.status(404).json({ success: false, error: 'Question not found' });
        }
        res.json({ success: true, question: updatedQuestion });
    } catch (error) {
        console.error('Error updating question by ID:', error);
        res.status(500).json({ success: false, error: 'Error updating question by ID' });
    }
};

// Controller method to delete a question by ID
const deleteQuestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedQuestion = await Question.findByIdAndDelete(id);
        if (!deletedQuestion) {
            return res.status(404).json({ success: false, error: 'Question not found' });
        }
        res.json({ success: true, message: 'Question deleted successfully' });
    } catch (error) {
        console.error('Error deleting question by ID:', error);
        res.status(500).json({ success: false, error: 'Error deleting question by ID' });
    }
};

module.exports = {
    getAllQuestions,
    createQuestion,
    getQuestionById,
    updateQuestionById,
    deleteQuestionById
};
