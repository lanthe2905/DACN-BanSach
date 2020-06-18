const SanPhamDAO = require('../DAO/HomeDAO')


async function  buildHomePage(listAllProductI18n) {
    console.log(`=================== start ================`);
    
    let arrayReturn = []
    let arrQuery = listAllProductI18n.map((item) => {
        return item.maLoai
    })
    let results = await SanPhamDAO.getFromLoaiSP(arrQuery);
    let listMaLoaispFromI18n = listAllProductI18n.map(loaiSP => loaiSP.maLoai) 
    for(number of listMaLoaispFromI18n) {
        let arrTemp = []
        for(item of results.filter( obj => obj.maLoai == number)){
            arrTemp.push(item)

        }
        arrayReturn.push(arrTemp)
    }
    
    return arrayReturn
}


module.exports = {
    buildHomePage: buildHomePage
}