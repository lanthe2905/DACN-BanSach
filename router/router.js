var quickviewController = require("../Controller/quickviewController")
module.exports = function(app){

    app.get('/quickview/:masp',(req,res)=>{
        quickviewController.handler(req,res);
    })

}
