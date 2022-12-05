const Users = require('./Users')
const BlogEntry = require('./Blog-Entries')
const BlogComments = require('./Blog-Comments')

// sourceModel.belongsTo(targetModel)

// BlogEntry.belongsTo(Users, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
//   });

// BlogEntry.hasMany(BlogComments, {
//     foreignKey: 'blogId',
//     onDelete: 'CASCADE'
// })

// BlogComments.belongsTo(Users, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
// })

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

// BlogEntry.hasMany(BlogComments, {
//     foreignKey: 'blogId',
//     onDelete: 'CASCADE'
// })

// BlogComments.belongsTo(BlogEntry, {
//     foreignKey: 'blogId'
// })


module.exports = { Users, BlogEntry, BlogComments }

