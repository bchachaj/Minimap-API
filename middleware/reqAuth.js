require('dotenv').config();
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const User = mongoose.model('User');

const { JWT_SECRET } = process.env; 

module.exports = (req, res, next) => {
    const { authorization } = req.headers ;
    console.log(authorization)
    if(!authorization) {
        return res.status(401).send({ error: 'User not authenticated'});
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, JWT_SECRET, async (err, payload) => {
        
        if(err) {
            console.log(err);
            return res.status(401).send({ error: 'User not authenticated' });
        }
        const { userId } = payload; 

        const user = await User.findById(userId);
        req.user = user; 
        next();
    })
};