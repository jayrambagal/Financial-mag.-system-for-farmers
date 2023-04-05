const express = require("express")
const routes = express.Router()
const model = require("../database/schema")

routes.post("/test",async(req,res)=>{
    try{

        const Create = new model.Categories({
            type: "Investment",
            color: "#FCBE44"
        })
        await Create.save()
        
        res.status(200).json({yessss:"ho gaya bhai tere se"})
    }catch(e){
        res.status(400).json({error:"bhai tu rahane de tere se nahi hoga"})
        console.log(e);
    }
})

module.exports = routes;