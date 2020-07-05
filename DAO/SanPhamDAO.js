const sanpham  = require("../models/sanpham");
var   hinhAnh = require('../models/hinhanh')
const  {Sequelize}  = require('sequelize')

function getSP(masp){
    return sanpham.findByPk(masp,{
        include:[{
            model: hinhAnh
        }]
        
    })
}

module.exports = {
    getSP:  getSP

}