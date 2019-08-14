const express = require('express');
const mongoose = require('mongoose');
const reqAuth = require('../middleware/reqAuth');
// const fs = 
const upload = require('./../image_process/index');
const router = express.Router();
// router.use(reqAuth);
console.log(upload);

const singleUpload = upload.single('image');

const test = () => console.log('test');

router.post('/uploads', test, (req, res) => {
    console.log(req, res); 
    res.send('upload');
})

console.log(singleUpload);

// router.post('/image-upload', test, function (req, res) {
//     singleUpload(req, res, function (err) {
//         if (err) {
//             return res.status(422).send({ errors: [{ title: 'Image Upload Error', detail: err.message }] });
//         }

//         return res.json({ 'imageUrl': req.file.location });
//     });
// });


module.exports = router; 