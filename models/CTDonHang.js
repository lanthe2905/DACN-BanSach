const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
const DonHang = require('./DonHang')
const SanPham = require('./sanpham')
class CTDonHang extends Model {} 

CTDonHang.init({
    maCTDH :{
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    gia:{
        type :Sequelize.DOUBLE
    },
    soLuong: {
        type: Sequelize.INTEGER
    }
},{sequelize})
CTDonHang.belongsTo(DonHang,{foreignKey:"maDH"})
CTDonHang.belongsTo(SanPham,{foreignKey:"maSP"})
