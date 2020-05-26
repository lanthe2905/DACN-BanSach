const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
const loaiSP = require('./loaisp')
const tacGia = require('./tacgia')
class SanPham extends Model{}

SanPham.init({
    maSP:{
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    maLoaiSP:{
        type:Sequelize.BIGINT,
        references:{
            model: loaiSP,
            key : 'maLoaiSP'
        }
    },
    tenSP :{
        type:Sequelize.STRING, 
    },
    gia :{
        type: Sequelize.DOUBLE
    },
    soLuong: {
        type: Sequelize.INTEGER
    },
    maTG :{
        type: Sequelize.BIGINT,
        references:{
            model: tacGia,
            key: 'maTG'
        }
    },
    moTa:{
        type: Sequelize.TEXT
    },
    soTrang:{
        type:Sequelize.INTEGER
    },
    loaiBia :{
        type : Sequelize.STRING,
    },
    kichThuoc:{
        type: Sequelize.STRING
    }
    ,
    canNang:{
        type: Sequelize.DOUBLE
    },
    ngonNgu:{
        type: Sequelize.STRING
    },
    nxb:{
        type: Sequelize.STRING
    },
    namXB:{
        type: Sequelize.DATEONLY                      
    },
    dichGia:{
        type:Sequelize.STRING  
    }

},{sequelize})

module.exports = SanPham