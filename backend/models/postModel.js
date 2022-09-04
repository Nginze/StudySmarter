const { attachment } = require('express/lib/response');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var PostSchema = new Schema({
    author:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    subContent:{
        type: String,
        required: true
    },
    communityId:{
        type: Schema.Types.ObjectId,
        required: true
    },
    upvoteIds:[
        {
            type: Schema.Types.ObjectId,
            
        },
        
    ],
    upvotes:{
        type: Number,
        default: 0
    },
    comments:[
        {
        
            type: Schema.Types.ObjectId,
        
         }
    ],
    date:{
        type:Date,
        default:Date.now
    },
    attachment:{
        type: String,
    }
})

var Post = mongoose.model("Posts", PostSchema)

module.exports = Post