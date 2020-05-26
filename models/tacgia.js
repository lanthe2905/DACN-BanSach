const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')

class TacGia extends Model{}

TacGia.init({
    maTG:{
        type:Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,          
    },
    tenTG:{type:Sequelize.STRING},
    diaChi:{type:Sequelize.STRING}, 
    SDT:{type:Sequelize.STRING(15)}, 
    gioiThieu:{type:Sequelize.TEXT}
},{sequelize,modelName: 'tacGia'})

TacGia.sync({force:true});

module.exports = TacGia

