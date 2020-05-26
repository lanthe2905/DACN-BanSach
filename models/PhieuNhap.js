const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
var NguoiDung = require('./nguoidung')
class PhieuNhap extends Model {}
PhieuNhap.init({
    maPN:{
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    ngayNhap:{
        type: Sequelize.DATE,
    },
    tongTien:{
        type: Sequelize.DOUBLE,
    },
    ghiChu:{
        type:Sequelize.TEXT
    }
},{sequelize})

PhieuNhap.belongsTo(NguoiDung,{foreignKey:'maNguoiDung'})
module.exports = PhieuNhap