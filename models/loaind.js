const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')

class LoaiND extends Model{}

LoaiND.init({
    maLND :{
        type: Sequelize.BigInt,
        primaryKey: true,
        allowNull: true,
        autoIncrement:true
    },
    ngayBL:{
        type:Sequelize.DATETIME
    }
},{sequelize})

module.exports = LoaiND