const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')


class BlogEntry extends Model {}

BlogEntry.init(
	{
		blogId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
		}, 
		body: {
			type: DataTypes.STRING
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
		modelName: 'blog_entries'
	}
)

module.exports = BlogEntry;