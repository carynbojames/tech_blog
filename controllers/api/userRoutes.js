const router = require('express').Router()
const { Users } = require('../../models') 

// signup user
router.post('/', async (req, res) => {
    try {
      const userData = await Users.create(req.body);
      console.log('userData: ', userData)
      return res.status(200).json(userData);
      
    //   req.session.save(() => {
    //     req.session.userId = userData.dataValues.id;
    //     req.session.email = userData.dataValues.email;
    //     req.session.loggedIn = true;        
    //   });
    } catch (err) {
        return res.status(400).json(err);
    
    }
  });



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

module.exports = router