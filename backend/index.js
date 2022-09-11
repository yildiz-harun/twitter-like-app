const cors = require("cors")
require("dotenv").config({ path: "./config/.env" })

const { connect } = require("./config/db")

const express = require("express")
const app = express()

app.use(express.json())
app.use(cors())

app.listen("5000", () => {
    console.log("Server started listening on port: 5000");
    connect()
})

const { postRouter } = require("./routes/post")
const { userRouter } = require("./routes/user")

app.use("/api/posts", postRouter)
app.use("/api/user", userRouter)
