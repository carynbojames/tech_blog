// Dependencies
const express = require('express'); // initialize express +
const session = require('express-session') // seesion & cookies +
const exphbs = require('express-handlebars'); // handlebars +
const path = require('path'); // finds directory +

const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

// Sets up the Express App +
const app = express();
const PORT = process.env.PORT || 3002; // .env PORT value else 3002

// Set up session w/ an object
// process.env specifies that it's in the .env file
const sess = {
  secret: process.env.SESSION_SECRET, // required 
  cookie: {
    maxAge: 24 * 60 * 60 *1000,
  }, 
  resave: false,
  saveUninitialized: true,
  // Create new instance of SequelizeStore
  store: new SequelizeStore({
    // Save sessions on the database
    db: sequelize,
  })
}

// Create middleware for cookie session
app.use(session(sess))

// Middleware to stringify +
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const hbs = exphbs.create({});
// Set Handlebars as the default template engine.
/// Tells express where the views will be
app.engine('handlebars', hbs.engine); // +
app.set('view engine', 'handlebars'); // +

// Static middleware
app.use(express.static(path.join(__dirname, 'public')));

// Tell express where to find the next route
// const routes = require('./controllers')
// app.use(routes)
// Below replaces the variable routes and notes 
app.use(require('./controllers'))

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT)
  })
});