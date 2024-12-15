import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './src/router/book_routes.mjs';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/', router);
const startServer = async () => {
  try {
    await mongoose.connect(process.env.connection_string);
    console.log("Connected to MongoDB");
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if there's a connection error
  }
};

startServer();