//PROTECTING ROUTES
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const welcome = require('./routes/welcome');
const login = require('./routes/login');
const register = require('./routes/register');
const userRouter = require('./routes/userRouter');
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => {
        if (error)
            console.log(error);
        else
            console.log('Mongo Connected');
    })

app.get('/', express.json(), welcome);
app.post('/login', express.json(), login);
app.post('/register', express.json(), register);
app.use('/user', express.json(), userRouter);

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
