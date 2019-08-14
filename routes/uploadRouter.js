const express = require('express');
const mongoose = require('mongoose');
const reqAuth = require('../middleware/reqAuth');
const upload = require('./../image_process/index');
const router = express.Router();

router.get('/nice', function (req, res) {
    res.sendFile('index.html', { root: './image_process/' });
});

router.post('/upload', upload.array('upl', 1), function (req, res, next) {
    console.log(upload.array('upl', 1))
    res.send("Uploaded!");
});


module.exports = router; 