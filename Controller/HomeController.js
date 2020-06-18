const HomeService = require('../Service/HomeService')
const { build } = require('../models/nhomsp')

 async function  buildHomePage(req,res){
    let listAllProductI18n=  res.__('all_product')
    let data =  await HomeService.buildHomePage(listAllProductI18n)
    res.render('index',{allProduct: data})
    
}

module.exports = {
  buildHomePage : buildHomePage
}