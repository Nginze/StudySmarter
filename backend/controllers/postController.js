const Post = require('../models/postModel')

const getPosts = (req, res) => {
    
    Post.find({communityId: req.params.id})
        .then((posts) => {
            res.status(200).json(posts)
        })
}

const createPost = (req, res) => {
    console.log(req.body)
    const newPost = new Post({
        author: req.body.post.username,
        title: req.body.post.title,
        subContent: req.body.post.subContent,
        communityId: req.params.communityId,
        attachment: req.body.post.postImg
    })
    newPost.save()
}

const getPostById = (req, res) => {
    Post.findOne({_id: req.params.id})
        .then((post) => {
            res.status(200).json(post)
    })
}

const submitUpvote = (req, res) => {
    console.log(req.body)
    Post.updateOne(
        {_id: req.body.postID},
        {
            $addToSet:{
                upvoteIds:req.body.userID
            }
        }
    ).then((res)=> {})
}


const deleteUpvote = (req, res) => {
    console.log(req.body)
    Post.updateOne(
        
        {_id: req.body.postID},
        {
            $pull:{
                upvoteIds:req.body.userID
            }
        }
    ).then((res)=> {})
}

module.exports = {getPosts, createPost, getPostById, submitUpvote, deleteUpvote}
