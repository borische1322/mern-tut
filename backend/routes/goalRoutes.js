const express = require('express')
const router = express.Router()
const { getGoals, setGoals, putGoals, deleteGoals } = require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, putGoals).delete(protect, deleteGoals)

/* 
router.get('/', getGoals)

router.post('/', setGoals)

router.put('/:id', putGoals)

router.delete('/:id', deleteGoals)
*/

module.exports = router