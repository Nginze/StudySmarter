const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var CommentSchema = new Schema({
    postID:{
        type: Schema.Types.ObjectId,
        required: true
    },
    author:{
        type: String,
        
    },
    content:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    imageurl:{
        type:String,
        required: true
    }
    
    
})

var Comment = mongoose.model("Comments", CommentSchema)

module.exports = Comment