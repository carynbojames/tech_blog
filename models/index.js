// Used to create the associations

const User = require('./Users')
const BlogEntry = require('./Blog-Entries')
const BlogComment = require('./Blog-Comments')

User.hasMany(BlogEntry, {
    foreignKey: 'user'
})

BlogEntry.belongsTo(User, {
    foreignKey: 'user'
})

BlogEntry.hasMany(BlogComment, {
    foreignKey: 'blog_entries',
    onDelete: 'CASCADE'
})

BlogComment.belongsTo(BlogEntry, {
    foreignKey: 'blog_entries'
})

BlogComment.hasOne(User, {
    foreignKey: 'user'
})

User.belongsTo(BlogEntry, {
    foreignKey: 'user'
})

module.exports = { User, BlogEntry, BlogComment }

