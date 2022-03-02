'use strict';



const City = (Sequelize, DataTypes) => Sequelize.define('city',{
   cityName: {
       type: DataTypes.STRING,
       allowNull: false
   }
})

module.exports = City;