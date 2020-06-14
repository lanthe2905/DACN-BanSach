const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')

class LoaiND extends Model{}

LoaiND.init({
    maLND :{
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: true,
        autoIncrement:true
    },
    ngayBL:{
        type:Sequelize.DATE
    }
},{sequelize})

module.exports = LoaiND