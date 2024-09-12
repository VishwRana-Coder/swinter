"use server";

import PostModel from "@/models/postModel";
import connectDB from "@/config/database";

// Function to add a new post
export async function addPost({ userName, userPhoto, textValue, timeStamp, postImage }) {
  try {
    await connectDB(); // Ensure the database is connected

    // Create a new post document
    const newPost = new PostModel({
      userName,
      userPhoto,
      textValue,
      timeStamp,
      postImage,
    });

    // Save the post in MongoDB
    await newPost.save();

    return { success: true, message: "Post added successfully!" };
  } catch (error) {
    return { success: false, errMsg: error.message };
  }
}

// Existing function to fetch posts
export async function getPosts() {
  try {
    await connectDB();
    const data = JSON.parse(JSON.stringify(await PostModel.find()));
    return { data };
  } catch (error) {
    return { errMsg: error.message };
  }
}
