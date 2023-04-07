const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path : "./.env"});
const port = process.env.PORT || 8000;

//  adding middlewares
app.use(cors());
app.use(express.json());

// Database Connection
const con = require('./database/connection');

// using routes
app.use(require('./routes/route'));

// connecting to the server
app.listen(port,async(req,res)=>{
    try{
        console.log(`server is started on port: ${port}` );
    }catch(e){
        console.log(e);
    }
})