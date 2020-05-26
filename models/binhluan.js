const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
const NguoiDung = require('./nguoidung')
const SanPham = require('./sanpham')
class BinhLuan extends Model {}

BinhLuan.init({
    maBL:{
        type:Sequelize.BIGINT,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    noiDung:{
        type:Sequelize.TEXT
    },
    ngayBL:{
        type:Sequelize.DATE
    }
},{sequelize})

BinhLuan.belongsTo(SanPham,{foreignKey:'maSanPham'})
BinhLuan.belongsTo(NguoiDung,{foreignKey:'maNguoiDung'})