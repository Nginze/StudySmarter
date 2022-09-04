const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    thirdPartyId:{
      type: String, 
      required: true
    },
    username: {
       type: String,
       required:true
    },
    imageUrl:{
      type:String,
    },

  }, {timestamps: true});
  
var User = mongoose.model("Users", UserSchema)

module.exports = User