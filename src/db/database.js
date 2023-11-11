import mongoose from "mongoose";
import { MONGODB_NAME } from "../constants/constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${MONGODB_NAME}`);
    console.log("database connected successfully ~~~");
  } catch (error) {
    console.log("error occurred at database connection ~~~", error);
    process.exit(1);
  }
};

export default connectDB;
