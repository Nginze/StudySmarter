const {Router} = require('express')
const router = Router()
const {getPosts, createPost, getPostById, submitUpvote, deleteUpvote} = require('../controllers/postController')

router.get('/:id', getPosts)
router.get('/get/:id', getPostById)
router.post('/create/:communityId', createPost)
router.patch('/vote', submitUpvote)
router.post('/vote', deleteUpvote)

module.exports = router