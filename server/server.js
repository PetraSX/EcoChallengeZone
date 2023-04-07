require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const app = express()


async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

connect();

// app.use(express.json());

// const usersRouter = require('./src/routes/users.router');
// app.use('/users', usersRouter);


// app.get("/api", (req, res) => {
//     res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
// })

app.listen(5000, () => { console.log("Server started on port 5000") })