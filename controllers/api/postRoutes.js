const router = require('express').Router();
const path = require('path') // Do I need it wherever it's used? 
const blogEntry = require('../../models/Blog-Entries')

// URL: api/posts

// GET form for new blog post
router.get('/new', (req, res) => res.render('write-new'))

// GET all blog posts -- route works
router.get('/', async (req, res) => {res.render('read-all')})
// router.get('/posts', async (req, res) => {
//     res.render('read-one')
// })
// ACTION: Use date for new post? 
// QUESTION: Do I figure out how to limit the number of posts on a single page?


// GET a single post
// ACTION: Requires an event listener
// router.module.get('/posts/:id', async (req, res) => {
//     try {
//         const postData = await blogEntries.findAll()
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

router.post('/', async (req, res) => {
	console.log(req.body)
	try {
		const entryData = await blogEntry.create({
		// QUESTION: Does this match the model names? No
		title: req.body.title,
		body: req.body.body
})
res.status(200).json(entryData)
} catch (err) {
	console.log(err)
	res.status(500).json(err)
}    
});


// router.get('/', async (req, res) => {
// 	const entryData = await blogEntry.findAll().catch((err) => {
// 		res.json(err);
// 	})
// 		const entries = entryData.map((data) => data.get({ plain: true }))
// 		res.render('read-all', { entries })
// })


// CREATE/POST a comment}

// UPDATE/PUT a comment

// DELETE a comment

module.exports = router;