require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

const { JWT_SECRET } = process.env;

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    const user = new User({ email, password });
    console.log(user);
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
    console.log(email, password)
    if (!email || !password) return res.status(422).send({ error: 'Credentials cannot be blank' });

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).send({ error: `Invalid credentials` });
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.send({ token })
    } catch (err) {
        console.log(err);
        return res.status(422).send({ error: 'Invalid credentials' });
    }

});

router.post('/logout', async (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password });

    await user.save();

    res.send('post signup request');
});


module.exports = router; 