const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    })

});

userSchema.methods.comparePassword = function(passCandidate) {
    return new Promise((resolve, reject) => {

        console.log(passCandidate, this)
        bcrypt.compare(passCandidate, this.password, (err, isMatch) => {
            if (err) {
                console.log('not match')
                return reject(err);
            } else {
                return resolve(true);
            }
        });
    });
}


mongoose.model('User', userSchema);