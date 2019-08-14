require('dotenv').config()
require('./models/User');
require('./models/Map');

const express = require('express');
const cors = require('cors'); 
const helmet = require('helmet')
const port = 3002;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRouter = require('./routes/authRouter');
const uploadRouter = require('./image_process/index');
const mapRouter = require('./routes/mapRouter');
const reqAuth = require('./middleware/reqAuth');

const app = express();
// app.options('*', cors()); 
app.use(helmet());
app.use(bodyParser.json());
app.use(authRouter);
app.use(uploadRouter);
app.use(mapRouter);

app.get('/', reqAuth, (req, res) => {
   res.send(req.user); 
});

const { DB_USER, DB_PASSWORD } = process.env; 

const mongoUri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@minimap-dtrf0.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
    useNewUrlParser: true, 
    useCreateIndex: true 
});


mongoose.connection.on('connected', () => {
    console.log('connected to mongod');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongod', err);
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
