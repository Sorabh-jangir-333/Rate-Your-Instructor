const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const Teacher = require('./models/Teacher');

const teachers = [
    {
        name: "Sunil",
        image: "../photos/teacher1.jpeg",
        department: "Accounting",
        college_id: "1",
        experience: "10 years",
        description: "nice"
    },
    {
        name: "Ramesh",
        image: "../photos/teacher2.jpeg",
        department: "Computer Science",
        college_id: "2",
        experience: "8 years",
        description: "excellent"
    },
    {
        name: "Suresh",
        image: "../photos/teacher3.jpeg",
        department: "Marketing",
        college_id: "3",
        experience: "12 years",
        description: "good"
    },
    {
        name: "Mahesh",
        image: "../photos/teacher4.jpeg",
        department: "Electrical Engineering",
        college_id: "4",
        experience: "5 years",
        description: "average"
    },
    {
        name: "Ganesh",
        image: "../photos/teacher5.jpeg",
        department: "Mechanical Engineering",
        college_id: "5",
        experience: "7 years",
        description: "very good"
    }
];

async function run() {
    try {
        await mongoose.connect("mongodb://localhost:27017/rate-my-instrutor", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");

        await Teacher.insertMany(teachers);
        console.log("Teachers inserted successfully!");

    } catch (error) {
        console.error("Error inserting teachers:", error);
    } finally {
        mongoose.connection.close();
    }
}

run();
