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
    dimensions: {
        initHeight: Number, 
        initWidth: Number, 
        initMapScale: Number, 
    },
    mapMarkers: {
        type: [markerSchema],
        required: false  
    }
});


mongoose.model('Map', mapSchema);