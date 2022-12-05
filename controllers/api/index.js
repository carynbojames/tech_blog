const router = require('express').Router()
const postRoutes = require('./postRoutes')
const userRoute = require('./userRoutes')

router.use('/posts', postRoutes)
router.use('/user', userRoute)

module.exports = router