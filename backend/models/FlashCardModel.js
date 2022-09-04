const mongoose = require("mongoose");
const Schema = mongoose.Schema


CardSchema = new Schema({
	question: String,
	answer: String,
	
})


const FlashCardSchema = new Schema({
    title:{
        type:"string",
        required: true,
    },


    visibility: {
        type:"string",
        default:"Private",
    },

    cards:{
        type:"array"

    },
    userId:{
        type: Schema.Types.ObjectId,
        default: "Anonymous"
    },
    author:{
        type: String,
        default: 'Anonymous'
    },
    userImage:{
        type: String,
        default: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-anonymous-cryptocurrency-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
    }
})


const FlashCard = mongoose.model("FlashCard", FlashCardSchema)
module.exports = FlashCard;

