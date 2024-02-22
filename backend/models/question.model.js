const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['multipleChoice', 'checkbox', 'shortAnswer', 'dropdown'],
        required: true
    },
    text: {
        type: String,
        required: true
    },
    options: [String], // For multipleChoice, checkbox, dropdown
    isRequired: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("question", questionSchema);