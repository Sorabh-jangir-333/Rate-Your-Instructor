const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Teacher = require('./models/Teacher'); // Adjust the path if necessary

dotenv.config();

const teachers = [
    { 
        name: "Sunil",
        image: "../photos/teacher1.jpeg",
        department: "Accounting",
        college_id: "66edae3c8bd01b3978ca0387",
        experience: "10 years",
        description: "Expert in Calculus and Linear Algebra.",
        rating: 4.0,
        college_name: "Maharashi Arvind University"
    },
    {
        name: "Ramesh",
        image: "../photos/teacher2.jpeg",
        department: "Computer Science",
        college_id: "66edae3c8bd01b3978ca0388",
        college_name: "Jaipur National University",
        experience: "8 years",
        rating: 0,
        description: "Focus on Quantum Mechanics and Thermodynamics."
    },
    {
        name: "Suresh",
        image: "../photos/teacher3.jpeg",
        department: "Marketing",
        college_id: "66edae3c8bd01b3978ca03893",
        experience: "12 years",
        rating: 0,
        description: "Expert in Microeconomics and Macroeconomics.",
        college_name: "JECRC University",
    },
    {
        name: "Mahesh",
        image: "../photos/teacher4.jpeg",
        department: "Electrical Engineering",
        college_id: "66edae3c8bd01b3978ca038a",
        college_name: "Poornima University",
        experience: "5 years",
        rating: 0,
        description: "Focus on Digital Signal Processing and Control Systems.",
    },
    {
        name: "Ganesh",
        image: "../photos/teacher5.jpeg",
        department: "Mechanical Engineering",
        college_id: "66edae3c8bd01b3978ca038b",
        college_name: "Jagannath University",
        experience: "7 years",
        rating: 0,
        description: "Expert in Thermodynamics and Fluid Mechanics.",
    }
];

async function run() {
    try {
        await mongoose.connect("mongodb://localhost:27017/rate-my-instrutor", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");

        for (const teacher of teachers) {
            await Teacher.updateOne(
                { name: teacher.name }, // Find by name
                { $set: teacher }, // Update the teacher data
                { upsert: true } // Insert if not found
            );
        }

        console.log("Teachers updated successfully!");

    } catch (error) {
        console.error("Error updating teachers:", error);
    } finally {
        mongoose.connection.close();
    }
}

run();
