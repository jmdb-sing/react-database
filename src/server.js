const express = require('express');
const mongoose = require('mongoose');
const app = express();

const URI = "mongodb+srv://admin:12345@databaseapp.q4dhfsq.mongodb.net/foodName?retryWrites=true&w=majority";

async function connect(){

    try {

        await mongoose.connect(URI)
        console.log("Connected to MongoDB");

    } catch (error){

        console.error(error);

    }
}

connect();

app.listen(8000, ()=>{

    console.log("Server started on port 8000");

});