const express = require('express');
const router = express.Router();
const { generateUploadURL } = require('./../image_process/index');

// only generating pre-signed URL and then send back to client side
router.post('/upload', function (req, res, next) {
    // var params = {
    //     Bucket: 'minimap-dev',
    //     Key: 'images/myimage.jpg',
    //     ContentType: 'image/jpeg'
    // };

    // console.log(params)
// 

    generateUploadURL(req.body);

    // console.log(req.body)
    res.send("Uploaded");
});


module.exports = router; 