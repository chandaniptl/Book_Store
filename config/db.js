const { default: mongoose } = require("mongoose");


const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://21bmiit023:12345@cluster0.rjy6mqh.mongodb.net/Book_Details');
        console.log('Connected to the database successfully');
    } catch (error) {
        console.log('Error connecting to the database:', error);
    }
}

module.exports = db;