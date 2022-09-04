const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var CommunitySchema = new Schema({

    name:{
        type: String,
        required: true
    },
    members:[
        {
            type: Schema.Types.ObjectId
        }
    ],
    description:{
        type: String,
        required: true
    },
    color:{

    }
    

})

var Community = mongoose.model("Community", CommunitySchema)

module.exports = Community