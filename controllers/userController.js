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
const User = require('../models/User')
const userController = {

    register: async function register(req, res) {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        try{
            const savedUser = await user.save();
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    login: function login(req, res) {
        console.log('login')
        res.send('login')
    },

}

module.exports = userController