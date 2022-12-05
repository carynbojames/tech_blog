const Users = require('./Users')
const BlogEntry = require('./Blog-Entries')
const BlogComments = require('./Blog-Comments')

BlogEntry.hasOne(Users, {
    foreignKey: 'author'
})

Users.belongsTo(BlogEntry, {
    foreignKey: 'author'
})

BlogComments.hasOne(Users, {
    foreignKey: 'author'
})

Users.belongsTo(BlogEntry, {
    foreignKey: 'author'
})

BlogEntry.hasMany(BlogComments, {
    foreignKey: 'blogId',
    onDelete: 'CASCADE'
})

BlogComments.belongsTo(BlogEntry, {
    foreignKey: 'blogId'
})



module.exports = { Users, BlogEntry, BlogComments }

