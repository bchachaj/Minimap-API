const express = require('express');
const mongoose = require('mongoose');
const reqAuth = require('../middleware/reqAuth');

const Map = mongoose.model('Map');

const router = express.Router();
router.use(reqAuth);


router.get('/maps', async (req, res) => {
    const maps = await Map.find({ userId: req.userId });
    res.send(maps);
});

router.post('/maps', async(req, res) => {
    const { imgSrc, name } = req.body; 

    if(!imgSrc) {
        return res.status(422).send({ error: 'Image source required' });
    }
    
    try {
        const map = new Map({ imgSrc, name, userId: req.user._id });
        await map.save();
        res.send(map);
    } catch (err) {
        console.log(err);
        return res.status(422).send({ error: 'Map save failed'})        
    }
});

module.exports = router; 