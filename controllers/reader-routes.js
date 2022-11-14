const { route } = require('./homepage-routes');

const router = require('express').Router();

router.get('/posts', async (req, res) => {
    res.render('read-one')
})
// // ACTION: Use date for new post? 

module.exports = router;