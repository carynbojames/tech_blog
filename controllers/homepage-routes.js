const router = require('express').Router();
const blogEntry = require('.././models/Blog-Entries')



// Signup
router.get('/signup', async (req, res) => {
    res.render('signup')
})

// Login
router.get('/login', async (req, res) => {
    res.render('login')
})

// GET form for new blog post
router.get('/new', (req, res) => res.render('write-new'))

// Homepage
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

// Single Post
router.get('/:id', async (req, res) => {
    try {
        const blogData = await blogEntry.findByPk(req.params.id)
        const blogs = blogData.map((data) => data.get({plain: true}))
        console.log(blogs)
        res.render('read-one', { blogs })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router; // Where is this sending it? 