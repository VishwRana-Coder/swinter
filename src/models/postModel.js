import { Schema, model, models } from 'mongoose'

const postSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  userPhoto: {
    type: String,
    required: true,
  },
  textValue: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  }

}, { timestamps: true })


const PostModel = models.posts || model('posts', postSchema)

export default PostModel;