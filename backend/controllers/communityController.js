const Community = require('../models/communityModel')

const getCommunities = (req, res) => {
    Community.find()
        .then((communities) => {
            res.status(200).json(communities)
        })
}

const createCommunity = (req, res) => {
    
    const newCommunity = new Community({
        name: req.body.name,
        color: req.body.color,
        description: req.body.desc
    })
    newCommunity.save()
    console.log("created")
}

const joinCommunity = (req, res) => {
    Community.findOneAndUpdate({_id: req.params.id},{
        $addToSet:{
            members:req.body.userId
        }
    }).then(() => {
        console.log("member successfully added")
    })
        
}

const leaveCommunity = (req, res) => {
    Community.findOneAndUpdate({_id: req.params.id}, {
        $pull:{
            members:req.body.userId
        }
    }).then(() => {
        console.log("member removed from community")
    })
}

const getCommunitiesById = (req, res) => {
    Community.findOne({_id: req.params.id})
    .then((community) => {
        res.status(200).json(community)
})
}

module.exports = {getCommunities, createCommunity, joinCommunity, leaveCommunity, getCommunitiesById}