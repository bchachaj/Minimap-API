const express = require('express');
const router = express.Router();
const { generateUploadURL } = require('./../image_process/index');

// only generating pre-signed URL and then send back to client side

router.post('/upload', async function (req, res, next) {
    try {
        const presignedUploadPath = await generateUploadURL(req.body);
        res.status(200).send(presignedUploadPath);
    } catch {
        res.status(422).send("Image upload URL generation failed.")
    } 
});


module.exports = router; 