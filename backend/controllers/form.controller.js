// formController.js
const Form = require('../models/form.model');

// Controller method to get all forms
const getAllForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.json({ success: true, forms: forms });
    } catch (error) {
        console.error('Error fetching forms:', error);
        res.status(500).json({ success: false, error: 'Error fetching forms' });
    }
};

// Controller method to create a form
const createForm = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newForm = await Form.create({ title, description });
        res.json({ success: true, form: newForm });
    } catch (error) {
        console.error('Error creating form:', error);
        res.status(500).json({ success: false, error: 'Error creating form' });
    }
};

// Controller method to get a form by ID
const getFormById = async (req, res) => {
    try {
        const { id } = req.params;
        const form = await Form.findById(id);
        if (!form) {
            return res.status(404).json({ success: false, error: 'Form not found' });
        }
        res.json({ success: true, form: form });
    } catch (error) {
        console.error('Error fetching form by ID:', error);
        res.status(500).json({ success: false, error: 'Error fetching form by ID' });
    }
};

// Controller method to update a form by ID
const updateFormById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const updatedForm = await Form.findByIdAndUpdate(id, { title, description }, { new: true });
        if (!updatedForm) {
            return res.status(404).json({ success: false, error: 'Form not found' });
        }
        res.json({ success: true, form: updatedForm });
    } catch (error) {
        console.error('Error updating form by ID:', error);
        res.status(500).json({ success: false, error: 'Error updating form by ID' });
    }
};

// Controller method to delete a form by ID
const deleteFormById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedForm = await Form.findByIdAndDelete(id);
        if (!deletedForm) {
            return res.status(404).json({ success: false, error: 'Form not found' });
        }
        res.json({ success: true, message: 'Form deleted successfully' });
    } catch (error) {
        console.error('Error deleting form by ID:', error);
        res.status(500).json({ success: false, error: 'Error deleting form by ID' });
    }
};

module.exports = {
    getAllForms,
    createForm,
    getFormById,
    updateFormById,
    deleteFormById
};
