
const SanPham = require('../models/sanpham')
const LoaiSanPham = require('../models/loaisp')
const HinhAnh = require('../models/hinhanh')
const  {Sequelize}  = require('sequelize');
const { raw } = require('body-parser');
const LoaiSP = require('../models/loaisp');
const Op = Sequelize.Op;


function getFromLoaiSP(arrQuery){
    return SanPham.findAll({
        include:[{
            model: LoaiSanPham,
            where: {
                maLoai:{
                    [Op.in]:[...arrQuery]
                },
            }
            ,attributes:['maLoai','tenLoai']
        },{model:HinhAnh,as:"HinhAnhs"}],
    })
}


module.exports = {
    getFromLoaiSP: getFromLoaiSP
}