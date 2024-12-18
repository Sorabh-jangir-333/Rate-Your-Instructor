const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    course_name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Course', CourseSchema);
