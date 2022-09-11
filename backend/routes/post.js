const express = require("express")
const { controlAuth } = require("../middleware/authController")

const { getPosts, getPost, createPost, updatePost, deletePost } = require("../controllers/post")

const postRouter = express.Router()

postRouter.use(controlAuth)

postRouter.get("/", getPosts)
postRouter.get("/:id", getPost)
postRouter.post("/", createPost)
postRouter.patch("/:id", updatePost)
postRouter.delete("/:id", deletePost)

module.exports = { postRouter }