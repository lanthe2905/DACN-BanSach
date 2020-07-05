var quickviewService = require('../Service/QuickviewService')
async function handler(req,res){
    let maSP = req.params.masp;

    if(req.xhr)
        await quickviewService.handler(req,res,maSP)
    else
        res.render("error404")
}

module.exports = {
    handler: handler
}