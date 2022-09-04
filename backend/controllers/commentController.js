const Comment = require('../models/commentModel')

const getComments = (req, res) => {
   
    Comment.find({postID: req.params.id})
        .then((comments) => {
            res.status(200).json(comments)
        })
}

const createComment = (req, res) => {
    
    const newComment = new Comment({
        postID: req.params.postid,
        content: req.body.content,
        imageurl: req.body.imageurl
    })
    newComment.save()
}


const submitLike = (req, res) => {
    Post.updateOne(
        {_id: req.body.commentId},
        {$inc: {
            "likes":1
          }
        },
    ).then((res)=> {})
}

module.exports = {getComments, createComment, submitLike}
