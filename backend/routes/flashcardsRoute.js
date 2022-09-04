const {Router} = require('express')
const router = Router()
const {createFlashCard, getFlashCards, getFlashCardsById, getMyCards} = require('../controllers/flashcardsController')


router.post('/', createFlashCard)
router.get('/', getFlashCards)
router.get('/:id', getFlashCardsById)
router.get('/private/:id', getMyCards)

module.exports = router