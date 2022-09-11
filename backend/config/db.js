const mongoose = require("mongoose")

const connect = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI, () => {
        console.log("database connected")
    })
}
module.exports = { connect }