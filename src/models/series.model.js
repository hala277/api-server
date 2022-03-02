'use strict';

const Series = (Sequelize, DataTypes) => Sequelize.define('series',{
    seriesName: {
        type: DataTypes.STRING,
        allowNull: false
    }
 })
 
 module.exports = Series;