const jwt = require("jsonwebtoken")
const { User } = require("../models/user.js")

const controlAuth = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' })
    }
    const token = authorization.split(' ')[1]
    console.log(req.headers);
    console.log(token);
    const { _id } = jwt.verify(token, process.env.SECRET)
    console.log("1");

    req.user = await User.findOne({ _id }).select('_id')//send user doc in the request object
    next()
}

module.exports = { controlAuth }