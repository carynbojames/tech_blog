const User = require('./Users')
const BlogEntry = require('./Blog-Entries')
const BlogComments = require('./Blog-Comments')

// sourceModel.belongsTo(targetModel)

// Blog Entry must have a user
BlogEntry.belongsTo(User, {
    foreignKey: 'userId', 
    onDelete: 'CASCADE'
  });
  // Foreign key is in BlogEntry model

BlogEntry.hasMany(BlogComments, {
    foreignKey: 'blogId',
    onDelete: 'CASCADE'
})
// Foreign key is in BlogComments model

BlogComments.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})
// Foreign key is in BlogComments model


// QUESTION: By not defining a foreign key in the model and allowing the association to do it, do you avoid the issue of having multiple foreign keys one table when it's not a belongsToMany? 



// BlogEntry.hasMany(BlogComments, {
//     foreignKey: 'blogId',
//     onDelete: 'CASCADE'
// })







/// ---- Incorrect association logic for all below?

// BlogComments.hasOne(Users, {
//     foreignKey: 'author'
// })


// BlogComments.belongsTo(BlogEntry, {
//     foreignKey: 'blogId'
// })

// Users.belongsTo(BlogEntry, {
//     foreignKey: 'author'
// })


/// ---- Foreign Key: 'author' in Users model
/// ---- Primary Key: 'userId' in

// BlogEntry.hasOne(Users, {
//     foreignKey: 'author'
// })
// Foreign key is in Users model

// Users.belongsTo(BlogEntry, {
//     foreignKey: 'author'
// })
// Foreign key is in Users model

module.exports = { User, BlogEntry, BlogComments }

