import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () =>{
  try {
    mongoose.connection.on('connected', () => {
      console.log("Database connected successfully"); })
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the process with failure
  }
}

export default connectDb;