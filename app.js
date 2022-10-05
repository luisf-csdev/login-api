// LOGIN JWT 
//ROUTES
// require('dotenv'). config();
// const express = require('express');
// const app = express();
// const userRouter = require('./routes/userRouter');

// app.use('/user', userRouter);

// app.listen(process.env.PORT, () => console.log('Sever Running'));

//DATABASE
// require('dotenv').config();
// const express = require('express');
// const app = express();
// const userRouter = require('./routes/userRouter');
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_CONNECTION_URL,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     },
//     (error) => {
//         if (error)
//             console.log(error)
//         else
//             console.log('Mongo Connected')
//     })

// app.use('/user', userRouter);

// app.listen(process.env.PORT, () => console.log('Sever Running'));


// //CREATING USER
// require('dotenv').config();
// const express = require('express');
// const app = express();
// const userRouter = require('./routes/userRouter');
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_CONNECTION_URL,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     },
//     (error) => {
//         if (error)
//             console.log(error)
//         else
//             console.log('Mongo Connected')
//     })

// app.use('/user', express.json(), userRouter);

// app.listen(process.env.PORT, () => console.log('Sever Running'));


//PROTECTING ROUTES
require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_URL,
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

app.use('/user', express.json(), userRouter);
app.use('/admin', express.json(), adminRouter);

app.listen(process.env.PORT, () => console.log('Sever Running'));