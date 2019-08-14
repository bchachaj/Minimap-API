require('dotenv').config();

var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')
var uuid = require('uuid');

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_ID,
    region: process.env.AWS_REGION,
    keyPrefix: process.env.AWS_KEYPREFIX
});

var s3 = new aws.S3();

// var params = { Bucket: 'minimap-dev', Key: 'images/myimage.jpg', ContentType: 'image/jpeg' };
// s3.getSignedUrl('putObject', params, function (err, url) {
//     console.log('Your generated pre-signed URL is', url);
// });

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'minimap-dev',
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
            // cb(null, Date.now()); //use Date.now() for unique file keys
        }
    })
});

module.exports = upload; 
