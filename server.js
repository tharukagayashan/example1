const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
require("./config/dbconnection");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const course = require("./routes/Course_Mgmt/courses.js");
app.use("/course",course);

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});