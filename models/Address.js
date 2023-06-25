const {DataTypes, HasMany} = require('sequelize')

const db = require('../db/conn')
const Users = require('./Users')

const Address = db.define('address',{
    street:{
        type: DataTypes.STRING,
        require: true,
    },
    number:{
        type: DataTypes.STRING,
        require: true,
    },
    city:{
        type: DataTypes.STRING,
        require: true,
    },
})

Users.hasMany(Address)
Address.belongsTo(Users)

module.exports = Address