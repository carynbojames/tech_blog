// Reference: 13-ORM > 15-Ins_Password_Hashing

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

// Set up method to run on instance data (per user) to check password
// QUESTION: How does it get passed to this? 
class User extends Model {
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password)
    // }
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {len: [4]}
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
    },
    {
        // hooks: {
        //     async beforeCreate(newUserData) {
        //         newUserData.password = await bcrypt.hash(newUserData.password, 10)
        //         return newUserData
        //     }
        // },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User