const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
var LoaiND = require('./loaind')

class NguoiDung extends Model{}
NguoiDung.init({
    maND :{
        type: Sequelize.BigInt,
        primaryKey: true,
        allowNull: true,
        autoIncrement:true
    },
    tenND:{
        type:Sequelize.STRING 
    },
    email:{
        type:Sequelize.STRING,
        unique:'u_email',
    },

    password:{
        type:Sequelize.STRING
    },
    diaChi:{
        type:Sequelize.STRING
    },
    SDT:{
        type:Sequelize.STRING(12)
    },
    gioiTinh:{
        type:Sequelize.INTEGER(1)
    },
    ngaySinh:{
        type:Sequelize.DATE
    },
    active:{
        type:{
            type:Sequelize.INTEGER(1)
        }
    }
},{sequelize})

NguoiDung.belongsTo(LoaiND,{foreignKey:'maLoaiNguoiDung'})
module.exports = NguoiDung