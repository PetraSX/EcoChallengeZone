
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('email-validator');

const User = require('../models/user.model');

const showUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({ message: err });
    }
}


const registerUser = async (req, res) => {
    const { username, password, email } = req.body;
    const duplicateUser = await User.findOne({ username }).exec();
    const duplicateEmail = await User.findOne({ email }).exec();

    if (!validator.validate(email)) {
        res.status(403).send({ message: "Email field should be a valid email!" });
        return;
    }

    if (username.length < 5 || username.length > 20) {
        res.status(403).send({ message: "Username should be between 5 and 20 characters" });
        return;
    }

    if (password.length < 8 || password.length > 32) {
        res.status(403).send({ message: "Password should be between 8 and 32 characters" });
        return;
    }

    if (duplicateUser != null) {
        res.status(409).send({ message: 'Username already exists. Try a different one' });
        return;
    }

    if (duplicateEmail != null) {
        res.statis(409).send({ message: 'Email is already in use. Try a different one' });
    }

    const user = new User({
        username: username,
        password: bcrypt.hashSync(password, 10),
        email: email,
        tokens: 0
    });

    try {
        await user.save();
        res.status(201).send({ message: `User ${username} successfully added to the database` });
    } catch (err) {
        res.status(500).send({ message: err });
    }
}


const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).exec();

    if (user == null)
        return res.status(404).send({ message: 'User not found!' });

    try {
        const { _id } = user;
        if (bcrypt.compareSync(password, user.password)) {
            let token = jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET);
            res.status(200).send({ message: token });
        }
        else {
            res.status(403).send({ message: 'Wrong password!' });
        }
    } catch (err) {
        res.status(500).send({ message: err });
    }
}

const authenticateToken = async(req, res, next) => {
    const token = req.headers["authorization"];
    
    if(token == null){
        res.status(401).send({message: "You should be authenticated"});
        return;
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user_id) => {
        if (err) {
            res.status(403).send({ message: "Wrong account!" });
            return;
        }
        req.user = await User.findOne({ _id: user_id }).exec();
        next();
    });
}

module.exports = {
    showUsers: showUsers,
    registerUser: registerUser,
    loginUser: loginUser,
    authenticateToken: authenticateToken
}