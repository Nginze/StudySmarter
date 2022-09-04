const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var todoSchema = new Schema({
    title:{
      type: String, 
      required: true
    },
    isComplete:{
        type: Boolean,
        default:false
    }

})
  
var Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo;