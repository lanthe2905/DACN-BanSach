const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
const PhieuNhap = require('./PhieuNhap')
const SanPham = require('./sanpham')
const NhaCungCap  = require('./NhaCungCap')
class CTPhieuNhap extends Model {}

CTPhieuNhap.init({
    maCTPN:{
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    giaNhap:{
        type:Sequelize.DOUBLE
    },
    soLuong:{
        type:Sequelize.INTEGER
    },
    tongTien:{
        type:Sequelize.DOUBLE
    },
    ghiChu:{
        type:Sequelize.TEXT
    }
},{sequelize})

CTPhieuNhap.belongsTo(PhieuNhap,{foreignKey:'maPhieuNhap'})
CTPhieuNhap.belongsTo(SanPham,{foreignKey:'maSanPham'})
CTPhieuNhap.belongsTo(NhaCungCap,{foreignKey:"maNhaCungCap"})

module.exports = CTPhieuNhap