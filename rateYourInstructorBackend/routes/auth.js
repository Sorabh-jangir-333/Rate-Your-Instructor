const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const College = require('../models/College');
const Course = require('../models/Course');
const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    const { full_name, email, phone, password, gender, course_id, college_id, course_name } = req.body;

    try {
        // Check if user with the same email already exists
        const existingEmailUser = await User.findOne({ email });
        if (existingEmailUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        // Check if user with the same phone number already exists
        const existingPhoneUser = await User.findOne({ phone });
        if (existingPhoneUser) {
            return res.status(400).json({ message: 'Phone number is already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            full_name,
            email,
            phone,
            password: hashedPassword,
            gender,
            course_id,
            college_id,
            course_name // Include course_name here
        });

        await newUser.save();

        // Create JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Response similar to login
        res.status(201).json({
            user: {
                id: newUser._id,
                full_name: newUser.full_name,
                email: newUser.email,
                phone: newUser.phone,
                gender: newUser.gender,
                course_id: newUser.course_id,
                college_id: newUser.college_id,
                course_name: newUser.course_name // Return course_name
            },
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Error signing up', error });
    }
});

// Login Route (unchanged)
router.post('/login', async (req, res) => {
    const { phone, password } = req.body;

    try {
        const user = await User.findOne({ phone });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, "4a5e3f6f7b8c9d0e1f2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5", { expiresIn: '10h' });
        res.json({ token, user: { id: user._id, full_name: user.full_name, course_name: user.course_name } });
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({ message: 'Error logging in' });
    }
});

module.exports = router;
