const jwt = require('jsonwebtoken');

function authorization (req, res, next) {
    const token = req.header('authorization-token');
    if (!token) return res.status(401).send('Access Denied')

    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = userVerified;
        next();
    } catch (error) {
        res.status(401).send('Access Denied')
    }
}

module.exports = authorization