
const SanPham = require('../models/sanpham')
const LoaiSanPham = require('../models/loaisp')
const  {Sequelize}  = require('sequelize');
const { raw } = require('body-parser');
const Op = Sequelize.Op;


function getFromLoaiSP(arrQuery){
    return SanPham.findAll({
        include:[{
            model: LoaiSanPham,
            where: {maLoai:{
                [Op.in]:[...arrQuery]
             }}
            ,attributes:['maLoai','tenLoai']
        }],
        raw:true
    })
}



module.exports = {
    getFromLoaiSP: getFromLoaiSP
}