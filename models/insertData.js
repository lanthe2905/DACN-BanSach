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

LoaiSP.create({
    tenLoai:"Công nghệ thông tin",
    maNhomSanPham: null,
})

LoaiSP.create({
    tenLoai:"Văn học",
    maNhomSanPham: null,
})

LoaiSP.create({
    tenLoai:"Kỹ năng sống",
    maNhomSanPham: null,
})

SanPham.create({
    tenSP:"Lập trình C++",
    soLuong: 100,
    maLoai: 3
})

SanPham.create({
    tenSP:"Lập trình JAVA 8",
    soLuong: 100,
    maLoai: 3
})


SanPham.create({
    tenSP:"Lập trình laravel",
    soLuong: 100,
    maLoai: 3
})


SanPham.create({
    tenSP:"Lập trình python",
    soLuong: 100,
    maLoai: 3
})

HinhAnh.create({
    duongDan: "/images/books/1.jpg",
    maSP: 1
})

HinhAnh.create({
    duongDan: "/images/books/1.jpg",
    maSP: 2
})

HinhAnh.create({
    duongDan: "/images/books/1.jpg",
    maSP: 3
})
HinhAnh.create({
    duongDan: "/images/books/2.jpg",
    maSP: 1
})

HinhAnh.create({
    duongDan: "/images/books/2.jpg",
    maSP: 2
})

HinhAnh.create({
    duongDan: "/images/books/2.jpg",
    maSP: 3
})