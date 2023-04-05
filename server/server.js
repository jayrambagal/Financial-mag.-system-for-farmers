const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path : "./.env"});
const port = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());

const con = require('./database/connection');

app.use(require('./routes/route'));

app.listen(port,async(req,res)=>{
    try{
        console.log(`server is started on port: ${port}` );
    }catch(e){
        console.log(e);
    }
})