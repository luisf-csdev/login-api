//PROTECTING ROUTES
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const login = require('./routes/login')
const register = require('./routes/register')
const userRouter = require('./routes/userRouter')
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => {
        if (error)
            console.log(error)
        else
            console.log('Mongo Connected')
    })

app.post('/login', express.json(), login);
app.post('/register', express.json(), register);
app.use('/user', express.json(), userRouter);

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
