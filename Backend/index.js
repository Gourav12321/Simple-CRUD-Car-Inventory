const bodyparser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router1 = require('./routes/routes.js');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


// mongodb connection

mongoose.connect("mongodb://localhost:27017/First").then(()=>{
    console.log("Database is connected");
}).catch((error)=>{
    console.log(error);
});


// accessing data and using express giving route location or address
app.use("/backend" , router1);


// server is responded on / and give the below message
app.get('/',(req,res)=>{
    res.json({message : "hello this is my first crud operation"});
})

// port running on 3000
app.listen(3000 , ()=>{
    console.log("Server is running on 3000 port");
});