const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
const DanhMucSP = require('./danhmucsp')
const NhomSP = require('./nhomsp')
const HinhAnh = require('./hinhanh')
const LoaiSP = require('./loaisp')
const TacGia = require('./tacgia')
const SanPham = require('./sanpham')
const CTDonHang = require('./CTDonHang')
const TrangThai = require('./TrangThai')
const DonHang = require('./DonHang')
const CTPhieuNhap = require('./CTPhieuNhap')
const NhaCungCap = require('./NhaCungCap')
const PhieuNhap = require('./PhieuNhap')
const NguoiDung = require('./NguoiDung')
const LoaiND = require('./LoaiND')

sequelize.sync({force:true})