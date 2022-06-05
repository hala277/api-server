'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const  city = require('./city.model.js');
const series = require('./series.model.js');
const products = require('./products.model');
const Collection = require('./collection-class.js');
// prepare the connection
const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

// for ssl
// uncommint when i did deploy this
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
         
        },
       
      }
} : {};

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);

let cityModel = city(sequelize,DataTypes);
let cityCollect = new Collection(cityModel);

let seriesModel = series(sequelize,DataTypes);
let seriesCollect = new Collection(seriesModel);

let productModel = products(sequelize,DataTypes);
let productCollect = new Collection(productModel);

module.exports = {
  db: sequelize,  // for connection and to use this in index.js
  cityCollection:cityCollect, // for creat table and use this in routes
  seriesCollection:seriesCollect,
  productsCollection:productCollect
}