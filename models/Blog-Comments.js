const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')


class BlogComments extends Model {}

BlogComments.init(
    {
        commentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        body: {
            type: DataTypes.STRING
        },
        blogId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog_entries',
                key: 'blogId'
            }
        },
        author: {
            type: DataTypes.STRING,
            references: {
                model: 'users',
                key: 'userId'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_comments'
    }
)

module.exports = BlogComments;