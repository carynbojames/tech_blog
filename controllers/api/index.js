const router = require('express').Router()
const Users = require('../../models/Users')
const postRoutes = require('./postRoutes')
// const userRoute = require('./userRoutes')

router.use('/posts', postRoutes)
// router.use('/user', userRoute)

// login user ('/api/user/login')
router.post('/login', async (req, res) => {
    console.log(req.body)
    try {
        const userData = await Users.findOne({
            // username = user model
            // req.body.username = login JavaScript
            where: {username: req.body.username}
            // QUESTION: How is this data returned?
        })
        // Exist if no user found
        if (!userData) {
            return res.status(400).json('Invalid credentials')
        }

        // Check password
        // Use instance method from User model
        // Pass in password from login page = req.body.password
        const pwValidated = await userData.checkPassword(req.body.password)
        if (!pwValidated) {
            return res.status(400).json('Invalid credentials')
        }

        // Create session and send a response
        req.session.save(() => {
            // declare session variables
            req.session.userId = userData.id
            req.session.username = userData.username
            req.session.loggedIn = true

            // send response to client
            res.status(200).json('You are now logged in')
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// router.get('/', async (req, res) => {res.render('read-all')})

module.exports = router