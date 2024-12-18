const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const College = require('./models/College');

const colleges = [
    {
        college_name: "Maharashi Arvind University",
        city: "Jaipur",
        state_name: "Rajasthan"
    },
    {
        college_name: "Jaipur National University",
        city: "Jaipur",
        state_name: "Rajasthan"
    },
    {
        college_name: "JECRC University",
        city: "Jaipur",
        state_name: "Rajasthan"
    },
    {
        college_name: "Poornima University",
        city: "Jaipur",
        state_name: "Rajasthan"
    },
    {
        college_name: "Jagannath University",
        city: "Jaipur",
        state_name: "Rajasthan"
    }
];

async function run() {
    try {
        await mongoose.connect("mongodb://localhost:27017/rate-my-instrutor", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");

        await College.insertMany(colleges);
        console.log("Colleges inserted successfully!");

    } catch (error) {
        console.error("Error inserting colleges:", error);
    } finally {
        mongoose.connection.close();
    }
}

run();
