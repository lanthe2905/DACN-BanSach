const sanphamDAO = require("../DAO/SanPhamDAO")
const  {Sequelize}  = require('sequelize')

function getSP(masp){
    return sanphamDAO.getSP(masp)
}

module.exports = {
    getSP: getSP

}