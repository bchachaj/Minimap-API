const express = require('express');
const mongoose = require('mongoose');
const reqAuth = require('../middleware/reqAuth');

const Map = mongoose.model('Map');

const router = express.Router();
router.use(reqAuth);


router.get('/maps', async (req, res) => {
    const maps = await maps.find({ userId: req.userId });
    res.send(map);
});

module.exports = router; 