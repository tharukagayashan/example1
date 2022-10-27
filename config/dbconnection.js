const mongoose = require("mongoose");

const MONGOURL = process.env.MONGOURL;

mongoose.connect(MONGOURL)
.then(()=>{
    console.log("MongoDB Connected..");
})
.catch((err)=>{
    console.error(err);
})