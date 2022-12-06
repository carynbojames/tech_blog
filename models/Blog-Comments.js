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
        // This was correct. The associations were wrong. 
        // Uncommented and no server error
        // TEST: Will the associations work without these especially since this model has two foreign keys? 
        // blogId: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'blog_entries',
        //         key: 'blogId'
        //     }
        // },
        // userId: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'userId'
        //     }
        // }
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