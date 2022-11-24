const User = require('../models/User');
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKEN_SECRET;

async function auth(req, res, next) {
    const token = req.header('authorization-token');
    if (!token) return res.status(401).send('Access Denied')

    try {
        const userVerified = jwt.verify(token, tokenSecret);
        await User.findOne({ email: userVerified.email });
        req.user = userVerified;
        next();
    } catch (error) {
        res.status(401).send({ success: false, message: 'Authorization token is wrong or expired' });
    }
}

module.exports = auth;
