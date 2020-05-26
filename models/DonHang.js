const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')

const NguoiDung = require('./nguoidung')

class DonHang extends Model {}
DonHang.init({
    maDH :{
        type:Sequelize.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    tongTien: {
        type:Sequelize.DOUBLE
    },
    tenKH :{
        type:Sequelize.STRING
    },
    diaChi :{
        type:Sequelize.STRING
    },
    sdt :{
        type:Sequelize.STRING(12)
    },
    ngayDat :{
        type:Sequelize.DATE
    },
    ngayGiao :{
        type:Sequelize.DATE
    },
    maTrangThai:{
        type: Sequelize.BIGINT
    }
},{sequelize})

DonHang.belongsTo(NguoiDung,{foreignKey:'maNguoiDung'})
DonHang.belongsTo(NguoiDung,{foreignKey:'maNhanVienKho'})
DonHang.belongsTo(NguoiDung,{foreignKey:'maQuanLy'})
DonHang.belongsTo(NguoiDung,{foreignKey:'maQuanTriVien'})

module.exports = DonHang