// Include express into the application
const express = require('express');

// Instantiate express
const app = express();

// This is used for parsing the .env file which contains the MongoDB connection string
require('dotenv').config();

// The line require('mongodb') basically returns an object with a bunch of methods
// So, {} is used for destructing the methods
// For this assignment, we are interested only in MongoClient and ObjectId.
// If we wanted another method say "X", we would include it between the {} as well
const {MongoClient, ObjectId} = require('mongodb');

// Include this so that this backend application will allow calls from the frontend
const cors = require('cors')

// Set this application to run on port 8080
const port = process.env.PORT || 8080;

app.listen(port);

// Ask the app to use cors
app.use(cors());

app.get('/professional', async function(req, res) {
    const uri = process.env.MONGO_URI.replace('dbname', 'lesson2');

    const client = new MongoClient(uri);

    const dbo = client.db('wdd431');

    const person = await dbo.collection('lesson2').findOne({_id: ObjectId('632499f905f278e4edea50c8')});
   
    res.send(person);
});