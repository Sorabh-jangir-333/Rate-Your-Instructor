const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    college_id: {
        type: String,
        required: true
    },
    college_name: {
        type: String,
        required: true // or false, depending on your requirements
    },
    experience: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0 // Default rating can be set to 0
    }
});

module.exports = mongoose.model('Teacher', TeacherSchema);
