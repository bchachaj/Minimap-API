const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
    coordinates: {
        xPos: Number, 
        yPos: Number
    },
    imgSrc: {
        type: String,
        default: 'default_marker_icon'
    },
    userId: {
        type: Number,
        required: true
    },
    timestamp: Number,
    active: Boolean, 
    eta: Number, 
    markerInfo: {
        name: String, 
        detail: String 
    }

});

const mapSchema = new mongoose.Schema({
    imgSrc: {
        type: String,
        required: true,
    },
    name: {
        type: String, 
        default: 'Map'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
        type: [markerSchema], 
    }
});


mongoose.model('Map', mapSchema);