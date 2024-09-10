import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { Post } from "@/lib/model/posts";
import { NextResponse } from "next/server";

// Ensure Mongoose is connected only once
async function connectToDatabase() {
  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(connectionStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw new Error("Database connection failed");
    }
  }
}

export async function GET() {
  try {
    // Connect to the database if not already connected
    await connectToDatabase();

    // Fetch the posts from the database
    const data = await Post.find();

    // Return the data as a JSON response
    return NextResponse.json({ posts: data });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
