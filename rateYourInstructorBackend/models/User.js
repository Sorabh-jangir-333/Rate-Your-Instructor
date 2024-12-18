const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    college_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College',
        required: true
    },
    course_name: {
        type: String,
        required: true // or false, depending on your requirements
    }
});

module.exports = mongoose.model('User', UserSchema);
