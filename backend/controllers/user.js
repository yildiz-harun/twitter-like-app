const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken")
const { User } = require("../models/user.js")

const signup = async (req, res) => {
    const { email, password } = req.body
    const exists = await User.findOne({ email })
    if (exists) {
        throw Error("Email is already in use.")
    }
    const salt = await bcryptjs.genSalt(10)
    const hashed = await bcryptjs.hash(password, salt)
    const user = await User.create({ email, password: hashed })
    const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: '3d' })
    res.json({ email, token })
}

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    const match = await bcryptjs.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password')
    }
    const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: '3d' })
    res.json({ email, token })
}

module.exports = { signup, login }