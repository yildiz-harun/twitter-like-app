const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    detail: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Post = mongoose.model("post", postSchema)

module.exports = { Post }