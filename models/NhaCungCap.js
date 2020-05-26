const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')

class NhaCungCap extends Model {}
NhaCungCap.init({
    maNCC: {
        type: Sequelize.BIGINT,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    tenNCC:{
        type: Sequelize.STRING
    },
    diaChi:{
        type: Sequelize.STRING
    },
    SDT:{
        type: Sequelize.STRING
    }
},{sequelize})

module.exports = NhaCungCap