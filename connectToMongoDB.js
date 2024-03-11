import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to MONGODB");
  } catch (error) {
    console.log("Error Connecting to MONGODB", error);
  }
};

export default connectToMongoDB;
