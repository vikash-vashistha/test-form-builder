const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model("form", formSchema);