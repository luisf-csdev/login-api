//ROUTES
// const express = require('express');
// const router = express.Router();

// router.post('/register', (req, res) => {
//     console.log('register')
//     res.send('register')
// })
// router.post('/login', (req, res) => {
//     console.log('login')
//     res.send('login')
// })

// module.exports = router;


//CONTROLLERS
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router;