const FlashCard = require("../models/FlashCardModel")

const createFlashCard = (req, res) => {

    if(req.body.visibility == 'private'){
        const newFlashCard = new FlashCard({
            title: req.body.title,
            description: req.body.tags,
            visibility: req.body.visibility,
            cards: req.body.inputFields,
            userId: req.body.userId,
            author: req.body.author,
            userImage: req.body.userImg
        })
        newFlashCard.save().then(() => {console.log("new card added")})
    }
    else{
        const newFlashCard = new FlashCard({
            title: req.body.title,
            description: req.body.tags,
            visibility: req.body.visibility,
            cards: req.body.inputFields,
            userId: req.body.userId,
            author: req.body.author,
            userImage: req.body.userImg
        })
        newFlashCard.save().then(() => {console.log("new card added")})
    }
  

}

const getFlashCardsById = (req, res) => {
    FlashCard.findOne({_id: req.params.id})
        .then((sets) => {
            res.status(200).json(sets)
        })
}


const getFlashCards = (req, res) => {
    console.log("get flashcards is active")
    FlashCard.find({visibility: "public"})
        .then((cards) => {
            res.status(200).json(cards)
        })
}

const getMyCards = (req, res) => {
    
    FlashCard.find({userId: req.params.id})
        .then((cards) => {
            res.status(200).json(cards)
        })
}



module.exports = { createFlashCard, getFlashCards, getFlashCardsById, getMyCards}