const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')
// const Users = require('./Users')

class blogComments extends Model {}

blogComments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        body: {
            type: DataTypes.STRING
        },
        blogId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog_entries',
                key: 'id'
            }
        },
        // author: {
        //     type: DataTypes.STRING,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_comments'
    }
)

module.exports = blogComments;