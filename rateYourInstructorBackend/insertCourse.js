const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const Course = require('./models/Course');

const Courses = [
    {
        course_name: "Computer Science",
      },
      {
        course_name: "Business Administration",
      },
      {
        course_name: "Mechanical Engineering",
      },
      {
        course_name: "Biology",
      }
];

async function run() {
    try {
        await mongoose.connect("mongodb://localhost:27017/rate-my-instrutor", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");

        await Course.insertMany(Courses);
        console.log("Course inserted successfully!");

    } catch (error) {
        console.error("Error inserting Course:", error);
    } finally {
        mongoose.connection.close();
    }
}

run();
