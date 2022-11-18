const router = require('express').Router()
const postRoutes = require('./postRoutes')

router.use('/posts', postRoutes)

// router.get('/', async (req, res) => {res.render('read-all')})

module.exports = router