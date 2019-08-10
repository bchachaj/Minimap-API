const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');

router.post('/signup', async (req, res) => {
    const { email, password } = req.body; 
    const user = new User({ email, password });

    await user.save();

    res.send('post signup request');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body; 
    const user = new User({ email, password });

    await user.save();

    res.send('post signup request');
});

router.post('/logout', async (req, res) => {
    const { email, password } = req.body; 
    const user = new User({ email, password });

    await user.save();

    res.send('post signup request');
});


module.exports = router; 