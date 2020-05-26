const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
const NhomSP = require('./nhomsp')
class LoaiSP extends Model{}

LoaiSP.init({
    maLoai:{
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tenLoai:{
        type: Sequelize.STRING,
    }
},{sequelize})
LoaiSP.belongsTo(NhomSP,{foreignKey:'maNhomSanPham'})
module.exports = LoaiSP 