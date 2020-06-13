const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
const test = require('./test')
class Test2 extends Model{}

Test2.init({
    age : {type: Sequelize.DataTypes.INTEGER
    },                                 
},{sequelize})

test.hasMany(Test2)
Test2.belongsTo(test,{foreignKey:{allowNull:false}})
Test2.belongsTo(test,{foreignKey:{name:'fk_userID',field:'userID'}})

/* =============== create ---------------------- */
// test.create({age:1,score:1},{fields:['age']})
// .then(item =>{
//     console.log(item)
// }).catch(error =>{
//     console.log(error);
// })

// Test2.create({age:12,userID:1})
// .then(item =>{

// })

/* =============== Search ---------------------- */



// Test.findAll({
//     where:{
//         age: 19
//     },
//     raw:true
// }).then(item =>{
//     console.log(item);
    
// })


// test.findAll({
   
//     include: [{
//         model: Test2,
//         where: { testId: 1 }
//     }],
//     raw:true
    
// }).then(item =>{ console.log(item.length);
// })

// test.findAll({
//     include:[{
//         model:{Test2, as:'Test2'}
//     }]
// })

// sequelize.sync({force:true})
module.exports = Test2