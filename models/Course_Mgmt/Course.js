const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    created_by:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String,
        required:false
    },
    course:{
        type:["content_no","title","description"],
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now,
        required:true
    },

})

const exportCourse = mongoose.model("Courses",CourseSchema);
module.exports = exportCourse;