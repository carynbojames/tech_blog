const router = require('express').Router();
const blogEntry = require('.././models/Blog-Entries')
const blogComments = require('.././models/Blog-Comments')

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
        // Retrieve all posts from db
        const blogData = await blogEntry.findAll()
        // Serialize the data
        // plain:true = no metadata
        const blog = blogData.map((data) => data.get({plain: true}))
        console.log(blog)
        // Respond with template to render along with data retrieved
        // Data must be an object. Blog is an xx. 
        // Property name: blog; value: blog
        res.render('all', { blog })
        // Result is an array
    } catch (err) {
        res.status(500).json(err)
    }
})

// Single Post
// The same variable can be repeated
// Variable blog is passed into handlebar
router.get('/:id', async (req, res) => {
    try {
        const blogData = await blogEntry.findByPk(req.params.id)
        const blog = blogData.get({plain: true})
        console.log(blog)
        res.render('read-one', { blog })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/:id', async (req, res) => {
	console.log('new comment req.body', req.body)
	try {
		const commentData = await blogComments.create({
		comment: req.body.comment
		})
	res.status(200).json(commentData)
	} catch (err) {
		console.log(err)
		res.status(500).json(err)
	}
})




module.exports = router; // Where is this sending it? 