const User = require('./Users')
const BlogEntry = require('./Blog-Entries')
const BlogComments = require('./Blog-Comments')

// sourceModel.belongsTo(targetModel)

User.hasMany(BlogEntry) // TEST to see if this is sufficient

BlogEntry.belongsTo(User, {
    foreignKey: 'userId', 
    onDelete: 'CASCADE'
  });
  // Primary key is in User model
  // Foreign key is in BlogEntry model 

User.hasMany(BlogComments)

BlogComments.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})
// Primary key is in the User model
// Foreign key is in BlogComments model 

// TEST to see without a pair
BlogEntry.hasMany(BlogComments, {
    foreignKey: 'blogId',
    onDelete: 'CASCADE'
})
// Primary key is in the BlogEntry model
// Foreign key is in BlogComments model


// QUESTION: By not defining a primary key in the model and allowing the association to do it, do you avoid the issue of having multiple primary keys on different tables? 

module.exports = { User, BlogEntry, BlogComments }

/// ---- Correct ----
// BlogEntry.hasMany(BlogComments, {
//     foreignKey: 'blogId',
//     onDelete: 'CASCADE'
// })

// BlogComments.belongsTo(BlogEntry, {
//     foreignKey: 'blogId'
// })


/// ---- Incorrect association logic for all below ----
/// ---- Drawing out the map made it clear these were wrong

// BlogEntry.hasOne(Users, {
//     foreignKey: 'author'
// })

// Users.belongsTo(BlogEntry, {
//     foreignKey: 'author'
// })

// BlogComments.hasOne(Users, {
//     foreignKey: 'author'
// })

// Users.belongsTo(BlogEntry, {
//     foreignKey: 'author'
// })
/// --- Duplicate 
/// --- Most likely should have been BlogComments instead of BlogEntry
/// --- Still wrong
