const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');

router.get('/', auth, (req, res) => {

    if (req.user.admin) {
    res.send('This data must only be seen by the admin')
}
    else {
        res.status(401).send('Not Admin: Access Denied')
    }
})

router.get('/free', auth, (req, res) => {
    res.send('This data must only be seen by logged people')
})

module.exports = router