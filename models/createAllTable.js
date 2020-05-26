const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
const DanhMucSP = require('./danhmucsp')
const NhomSP = require('./nhomsp')


sequelize.sync()