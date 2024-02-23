const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['multipleChoice', 'checkbox', 'shortAnswer', 'dropdown'],
        required: true
    },
    question: {
        type: String,
        required: true
    },
    options: [String], // For multipleChoice, checkbox, dropdown
    answer: {
        type: String,
        required: true
    },
    formId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form'
    }
});

module.exports = mongoose.model("question", questionSchema);