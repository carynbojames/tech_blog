const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')

// Set up method to run on instance data (per user) to check password
// QUESTION: How does it get passed to this? 
class Users extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password)
    }
}

Users.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.INTEGER, /// ACTION: change
            allowNull: false,
            validate: {len: [4]}
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = Users