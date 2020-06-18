const  {Sequelize,Model}  = require('sequelize');

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

const sequelize = new Sequelize('ban_sach','root','root',{
  host: 'localhost',
  dialect:'mysql',
  define:{
    freezeTableName: true,
    // underscored:true,
    paranoid:true
  }
});

module.exports = sequelize