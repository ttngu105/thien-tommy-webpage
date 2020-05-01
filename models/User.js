const mongoose = require('mongoose');
const shortid = require("shortid")
var date = new Date()
const userSchema = new mongoose.Schema({
  username: 
    {type: String,required:true}
  ,
  email: 
    {type: String,required: true}
  ,
  password: 
    {type: String,required: true}
  ,
  sessionid:
    {type:String}
},{timestamps:true});

  var User = mongoose.model('user',userSchema);
module.exports = User