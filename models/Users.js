// const { Model, DataTypes } = require('sequelize')
// const sequelize = require('../config/connection')

// class Users extends Model {}

// Users.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         userName: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         password: {
//             type: DataTypes.INTEGER, /// ACTION: change
//             allowNull: false,
//             validate: {
//                 /// TBD
//             }
//         }
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'user'
//     }
// )

// module.exports = Users