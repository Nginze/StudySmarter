const {Router} = require('express')
const router = Router()
const {getComments, createComment, submitLike} = require('../controllers/commentController')

router.get('/:id', getComments)
router.post('/create/:postid', createComment)
router.patch('/like', submitLike)


module.exports = router