import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
          },
          country: {
            type: String,
            required: true
          },
          email: {
            type: String,
            required: true
          },
          experience: {
            type: String,
            required: true
          },
          addToNewsletter: {
            type: Boolean,
            default: false
          },
          authentic: {
            type: Boolean,
            default: true
          },
          createdAt: {
            type: Date,
            default: Date.now
          }
    }
)

const Post = mongoose.model('Post', postSchema)
export default Post  