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
		// This was correct. The associations were wrong.
		// TEST: Could these be commented in and out w/o issue since the association makes decisions on foreign keys? 
		userId: {
			type: DataTypes.INTEGER, // Data type has to match
			references: {
				model: 'user',
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