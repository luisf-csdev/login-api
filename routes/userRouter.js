const express = require('express');
const router = express.Router();

const auth = require('../controllers/auth');

router.get('/', auth, (req, res) => {
    res.send('This data must only be seen by logged people')
})

router.get('/admin', auth, (req, res) => {
    req.user.admin ? res.send('This data must only be seen by admins')
        : res.status(401).send('Not Admin: Access Denied')
})

module.exports = router;
