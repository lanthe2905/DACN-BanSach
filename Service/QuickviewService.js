const SanPhamService = require("../Service/SanPhamService")

async function handler(req,res,masp){
    let sanPhamPersis = await  SanPhamService.getSP(masp);
    console.log(sanPhamPersis);
    
    if (sanPhamPersis != 'undefined')
        res.render('page/quickview',{sanPham: sanPhamPersis});
    else
        res.render("error404")    
}

module.exports = {
    handler: handler
}