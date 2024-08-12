const mongoose = require('mongoose');

const URL = process.env.dbURL;

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = connectDB;