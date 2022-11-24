const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { registerValidate } = require('../controllers/validate');


async function handleRegister(req, res) {
    const { error } = registerValidate(req.body);
    if (error) { return res.status(400).send(error.message) }

    const { name, email, password, admin } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, 10);

    const selectedUser = await User.findOne({ email });
    if (selectedUser) return res.status(400).send({ success: false, error: 'User already exists' })

    const user = new User({
        name: name,
        email: email,
        password: encryptedPassword,
        admin: admin
    })

    try {
        await user.save();
        res.status(201).send({ success: true })
    } catch (error) {
        res.status(400).send({ success: false })
    }
}

module.exports = handleRegister;
