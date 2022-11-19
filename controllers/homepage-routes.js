const router = require('express').Router();
const blogEntry = require('.././models/Blog-Entries')

// Homepage
// router.get('/', async (req, res) => {
//     res.render('all')
// });

router.get('/', async (req, res) => {
    try {
        const blogData = await blogEntry.findAll()
        const blog = blogData.map((data) => data.get({plain: true}))
        console.log(blog)
        res.render('all', { blog })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Signup
router.get('/signup', async (req, res) => {
    res.render('signup')
})

// Login
router.get('/login', async (req, res) => {
    res.render('login')
})

// router.get('/new', async (req, res) => {
//     res.render('write-new')
// })

// GET form for new blog post
router.get('/new', (req, res) => res.render('write-new'))

module.exports = router; // Where is this sending it? 