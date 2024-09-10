import mongoose from "mongoose";


const productModel = new  mongoose.Schema({
    userName: String,
    userEmail: String,
    userPhoto: String,
    textValue: String,
    timeStamp: String
})

export const Post = mongoose.models.posts || mongoose.model("posts", productModel)