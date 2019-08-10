const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
    imgSrc: {
        type: String,
        required: true,
    },
    userId: {
        type: Number,
        required: true
    },
    initHeight: {
        type: Number,
        required: true
    },
    initWidth: {
        type: Number,
        required: true
    },
    initMapScale: {
        type: Number,
        required: true
    },
    mapMarkers: {
        type: Array, 
    }
});




mongoose.model('Map', mapSchema);