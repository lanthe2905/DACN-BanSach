const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')

class DanhMucSP extends Model{}
DanhMucSP.init({
  maDM:{
    type:Sequelize.BIGINT,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  },
  tenDM:{
    type:Sequelize.STRING
  }
}, {sequelize })


module.exports = DanhMucSP
