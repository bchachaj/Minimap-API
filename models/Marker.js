const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
    xPos: {
        type: Number,
        required: true
    },
    xPos: {
        type: Array,
    },
    imgSrc: {
        type: String,
    },
    userId: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
    },
    eta: {
        type: Number
    },
    markerName: {
        type: String, 
    },
    markerInfo: {
        type: Schema.Types.Mixed, 
    }
 
});


mongoose.model('Marker', markerSchema);