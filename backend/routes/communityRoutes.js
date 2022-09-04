const {Router} = require('express')
const router = Router()
const {getCommunities, createCommunity, joinCommunity, leaveCommunity, getCommunitiesById} = require('../controllers/communityController')

router.get('/', getCommunities)
router.get('/:id', getCommunitiesById)
router.post('/create', createCommunity)
router.post('/join/:id', joinCommunity)
router.post('/leave/:id', leaveCommunity)

module.exports = router