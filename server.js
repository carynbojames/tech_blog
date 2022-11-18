// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const sequelize = require('./config/connection')

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3002;

// Set Handlebars as the default template engine.
/// Tells express where the views will be
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Static middleware
app.use(express.static(path.join(__dirname, 'public')));

// Tell express where to find the next route
app.use(require('./controllers'))
// app.use(require('./controllers/homepage-routes')) // delete after routes built
// app.use(require('./controllers/reader-routes'))
// app.use(require('./controllers/writer-routes'))
// QUESTION: Can you use the app.use(require) to more than one route file?

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT)
  })
});