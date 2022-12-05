const router = require('express').Router()
const { User } = require('../../models') 

// signup user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.userId = userData.dataValues.id;
        req.session.email = userData.dataValues.email;
        req.session.loggedIn = true;
        
        return res.status(200).json(userData);
        
      });
    } catch (err) {
        return res.status(400).json(err);
    
    }
  });

module.exports = router