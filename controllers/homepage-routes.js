const router = require('express').Router();

// Homepage
router.get('/', async (req, res) => {
    res.render('all')
});

// Signup
router.get('/signup', async (req, res) => {
    res.render('signup')
})

// Login
router.get('/login', async (req, res) => {
    res.render('login')
})

router.get('/new', async (req, res) => {
    res.render('write-new')
})

module.exports = router; // Where is this sending it? 