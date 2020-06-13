const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
class Test extends Model{}

Test.init({
    age : {type: Sequelize.DataTypes.INTEGER,
        validate:{
            max:2,
            min:1
        }
    },
    score: {type: Sequelize.INTEGER,
        validate: {
            max:30
        }
    }                                     
},{sequelize})


// Test.create({age:1,score:1},{fields:['age']})
// .then(item =>{
//     console.log(item)
// }).catch(error =>{
//     console.log(error);
// })

// Test.findAll({
//     // where:{
//     //     age: 10
//     // },
//     // raw:true
// }).then(item =>{
//     console.log(item);
// })


// Test.sync({force:true})

module.exports = Test