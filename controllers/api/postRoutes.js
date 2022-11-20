const router = require('express').Router();
const path = require('path') // Do I need it wherever it's used? 
const blogEntry = require('../../models/Blog-Entries')
const blogComments = require('../../models/Blog-Comments');
const { restart } = require('nodemon');

// URL: api/posts



// GET all blog posts -- route works
router.get('/', async (req, res) => {res.render('read-all')})
// router.get('/posts', async (req, res) => {
//     res.render('read-one')
// })
// ACTION: Use date for new post? 
// QUESTION: Do I figure out how to limit the number of posts on a single page?


router.post('/', async (req, res) => {
	console.log('new blog req.body', req.body)
	try {
		const blogData = await blogEntry.create({
			title: req.body.blog_title, 
			body: req.body.blog_body,
			author: req.body.author
		})
	res.status(200).json(blogData)
	} catch (err) {
		console.log(err)
	}
})


router.post('/comments', async (req, res) => {
	console.log('new comment req.body', req.body)
	try {
		const commentData = await blogComments.create({
		body: req.body.body
		})
	res.status(200).json(commentData)
	} catch (err) {
		console.log(err)
		res.status(500).json(err)
	}
})



// CREATE/POST a comment}

// UPDATE/PUT a comment

// DELETE a comment

module.exports = router;