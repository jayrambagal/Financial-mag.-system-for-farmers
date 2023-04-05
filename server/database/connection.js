const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.DATABASE_URL)
        .then(db => {
            console.log("Database Connected");
        }).catch(err => {
            console.log("Connection Error");
        })

module.exports = conn;