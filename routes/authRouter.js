require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

const { JWT_SECRET } = process.env; 

router.post('/signup', async (req, res) => {
    const { email, password } = req.body; 
    const user = new User({ email, password });

    try {
        await user.save();

        const token = jwt.sign({ userId: user._id }, JWT_SECRET) 

        res.send({ token });
    } catch (err) {
        return res.status(422).send(err.message)        
    }

});

router.post('/login', async (req, res) => {
    const { email, password } = req.body; 
    const user = new User({ email, password });

    try {
        await user.save();
        res.send('post signup request');
    } catch (err) {
        return res.status(422).send(err.message)
    }

});

router.post('/logout', async (req, res) => {
    const { email, password } = req.body; 
    const user = new User({ email, password });

    await user.save();

    res.send('post signup request');
});


module.exports = router; 