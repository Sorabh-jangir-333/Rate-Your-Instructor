const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    teacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Teacher'
    },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // This references the User model
    },
    attitude: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    teaching_skills: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    communication_skills: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    interaction: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    subject_knowledge: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        default: ''
    },
}, { timestamps: true });

module.exports = mongoose.model('Rating', RatingSchema);
