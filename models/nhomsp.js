const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
const DanhMucSP = require('./danhmucsp')

class NhomSP extends Model{}

NhomSP.init({
  maNSP:{
    type:Sequelize.BIGINT,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  },
  tenNSP:{
    type:Sequelize.STRING
  },
},{sequelize,modelName:'NhomSP'})

NhomSP.belongsTo(DanhMucSP,{foreignKey:'maDanhMucSanPham'})
module.exports = NhomSP


