const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')
// const Users = require('./Users')

class blogEntry extends Model {}

blogEntry.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allownull: false, 
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
		}, 
		body: {
			type: DataTypes.STRING
		},
		// author: {
		// 	type: DataTypes.STRING,
		// 	references: {
		// 		model: 'users',
		// 		key: 'id'
		// 	}
		// } 
		// QUESTION: Do I add a date? Or is that in the second object?
	},
	{
		sequelize, 
		timestamps: false, // Here are above? I don't know if this can be referenced
		freezeTableName: true,
		underscored: true,
		modelName: 'blog_entries'
	}
)

module.exports = blogEntry;