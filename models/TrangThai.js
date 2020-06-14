const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')

class NguoiDung extends Model{}

NguoiDung.init({
    maTT:{
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: true,
        autoIncrement:true
    },
    tenTT:{
        type: Sequelize.STRING,
    },
},{sequelize})