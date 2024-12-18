const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
    college_name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    state_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('College', CollegeSchema);
