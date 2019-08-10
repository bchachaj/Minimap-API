require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRouter');

const app = express();
app.use(bodyParser.json());
app.use(authRoutes)
const port = 3002;

app.get('/', (req, res) => {
   res.send('Hello'); 
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

console.log(mongoUri);


app.listen(port, () => {
    console.log(`listening on ${port}`);
});