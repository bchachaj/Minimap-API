require('dotenv').config();

var aws = require('aws-sdk')

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_ID,
    region: process.env.AWS_REGION,
});

var s3 = new aws.S3();


function generateUploadURL({ fileName }) {

    var params = { 
        Bucket: process.env.AWS_BUCKET, 
        Key: fileName, 
        ContentType: 'image/jpeg',
        ACL: 'public-read'
     };

    return new Promise((resolve, reject) => {
        s3.getSignedUrl('putObject', params, function (err, url) {
            if (err) {
                reject(err);
            } else {
                console.log('Your generated pre-signed URL is', url);
                resolve(url);
            }
        });
    });


}


module.exports = { generateUploadURL }; 
