// //CONTROLLERS
// const userController = {

//     register: function register(req, res) {
//         console.log('register')
//         res.send('register')
//     },

//     login: function login(req, res) {
//         console.log('login')
//         res.send('login')
//     },

// }

// module.exports = userController


//CREATING USER
// const User = require('../models/User')
// const userController = {

//     register: async function register(req, res) {
//         const user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password,
//         })

//         try{
//             const savedUser = await user.save();
//             res.send(savedUser);
//         } catch (error) {
//             res.status(400).send(error);
//         }
//     },

//     login: function login(req, res) {
//         console.log('login')
//         res.send('login')
//     },

// }

// module.exports = userController


//CREATING USER
// const User = require('../models/User')
// const userController = {

//     register: async function register(req, res) {
//         const user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password,
//         })

//         try{
//             const savedUser = await user.save();
//             res.send(savedUser);
//         } catch (error) {
//             res.status(400).send(error);
//         }
//     },

//     login: function login(req, res) {
//         console.log('login')
//         res.send('login')
//     },

// }

// module.exports = userController


//ENCRYPTING PASSWORD
// const User = require('../models/User')
// const bcrypt = require('bcryptjs');

// const userController = {

//     register: async function register(req, res) {
//         const selectedUser = await User.findOne({email: req.body.email});
//         if (selectedUser) return res.status(400).send('Email already exists');

//         const user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: bcrypt.hashSync(req.body.password)
//         })

//         try{
//             const savedUser = await user.save();
//             res.send(savedUser);
//         } catch (error) {
//             res.status(400).send(error);
//         }
//     },

//     login: function login(req, res) {
//         console.log('login')
//         res.send('login')
//     },

// }

// module.exports = userController


//LOGIN WITH USER
// const User = require('../models/User')
// const bcrypt = require('bcryptjs');

// const userController = {

//     register: async function register(req, res) {
//         const selectedUser = await User.findOne({email: req.body.email});
//         if (selectedUser) return res.status(400).send('Email already exists');

//         const user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: bcrypt.hashSync(req.body.password)
//         })

//         try{
//             const savedUser = await user.save();
//             res.send(savedUser);
//         } catch (error) {
//             res.status(400).send(error);
//         }
//     },

//     login: async function login(req, res) {
//         const selectedUser = await User.findOne({email: req.body.email});
//         if (!selectedUser) return res.status(400).send('Email or password incorrect');

//         const passwordMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
//         if(!passwordMatch) return res.status(400).send('Email or password incorrect');

//         res.send('User Logged');
//     }

// }

// module.exports = userController


//CREATING TOKEN
// const User = require('../models/User')
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const userController = {

//     register: async function register(req, res) {
//         const selectedUser = await User.findOne({ email: req.body.email });
//         if (selectedUser) return res.status(400).send('Email already exists');

//         const user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: bcrypt.hashSync(req.body.password)
//         })

//         try {
//             const savedUser = await user.save();
//             res.send(savedUser);
//         } catch (error) {
//             res.status(400).send(error);
//         }
//     },

//     login: async function login(req, res) {
//         const selectedUser = await User.findOne({ email: req.body.email });
//         if (!selectedUser) return res.status(400).send('Email or password incorrect');

//         const passwordMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
//         if (!passwordMatch) return res.status(400).send('Email or password incorrect');

//         const token = jwt.sign({ _id: selectedUser._id, admin: selectedUser.admin }, process.env.TOKEN_SECRET);

//         res.header('authorization-token', token);
//         res.send('User Logged');
//     }

// }

// module.exports = userController


//VALIDATING ENTRY
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { registerValidate, loginValidate } = require('./validate');

const userController = {

    register: async function register(req, res) {

        const { error } = registerValidate(req.body);
        if (error) { return res.status(400).send(error.message) }

        const selectedUser = await User.findOne({ email: req.body.email });
        if (selectedUser) return res.status(400).send('Email already exists');

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        })

        try {
            const savedUser = await user.save();
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    login: async function login(req, res) {

        const { error } = loginValidate(req.body);
        if (error) { return res.status(400).send(error.message) }

        const selectedUser = await User.findOne({ email: req.body.email });
        if (!selectedUser) return res.status(400).send('Email or password incorrect');

        const passwordMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
        if (!passwordMatch) return res.status(400).send('Email or password incorrect');

        const token = jwt.sign({ _id: selectedUser._id, admin: selectedUser.admin }, process.env.TOKEN_SECRET);

        res.header('authorization-token', token);
        res.send('User Logged');
    }

}

module.exports = userController