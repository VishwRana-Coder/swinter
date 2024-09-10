import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    return; // Already connected
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectToDatabase;
