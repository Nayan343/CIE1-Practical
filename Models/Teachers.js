var mongoose = require('mongoose');

var teacherSchema = mongoose.Schema({
    name:String,
    subject:String
})

module.exports = mongoose.model("teachers",teacherSchema)