const { Post } = require("../models/post.js")

const getPosts = async (req, res) => {
    const user_id = req.user._id
    const posts = await Post.find({ user_id }).sort({ createdAt: -1 })
    res.json(posts)
}

const getPost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id)
    res.json(post)
}

const createPost = async (req, res) => {
    const user_id = req.user._id
    const { detail } = req.body
    const post = await Post.create({ detail, user_id })
    res.json(post)
}
//
const updatePost = async (req, res) => {
    const { id } = req.params
    const { detail } = req.body
    const post = await Post.findOneAndUpdate({ _id: id }, { detail })
    res.json(post)
}
//
const deletePost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findOneAndDelete({ _id: id })
    res.json(post)
}

module.exports = { getPosts, getPost, createPost, updatePost, deletePost }
