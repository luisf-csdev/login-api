
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKEN_SECRET;
const { loginValidate } = require('../controllers/validate');


async function handleLogin(req, res) {
    const { error } = loginValidate(req.body);
    if (error) return res.status(400).send({ success: false, error: error.message })

    const { email, password } = req.body;

    const selectedUser = await User.findOne({ email });
    if (!selectedUser) return res.status(404).send({ success: false, error: 'User not found' });

    const correctPassword = bcrypt.compareSync(password, selectedUser.password);
    if (!correctPassword) return res.status(400).send({ success: false, error: 'Email or password incorrect' });

    const token = jwt.sign({ email: selectedUser.email, admin: selectedUser.admin }, tokenSecret, { expiresIn: 600 })

    res.header('authorization-token', token);
    res.status(201).send({ success: true, message: 'Your authorization token is in the headers and will expire in 5 minutes' });
}

module.exports = handleLogin;
