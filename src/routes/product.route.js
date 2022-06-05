'use strict';

const express = require('express');
// const{City} = require('../models/index.js');
const router = express.Router();
const {productsCollection} = require('../models/index.js');

// Routes
router.get('/prod',getProduct);
router.post('/prod',creatProduct);
router.get('/prod/:id',getOneProduct);
router.put('/prod/:id',updateProduct)
router.delete('/prod/:id',deleteProduct);

// localhost:3000/city
async function getProduct(request,response){
let prod = await productsCollection.readCollection();
response.status(200).json(prod);
}

// localhost:3000/city(body:{cityName:'amman'})
async function creatProduct(request,response){
    let newprod = request.body;
    let prod = await productsCollection.createCollection(newprod);
    response.status(200).json(prod);
}
// localhost:3000/city/2
async function getOneProduct(request,response){
    let pid = parseInt(request.params.id);
    let prod = await productsCollection.readCollection(pid);
    response.json(prod);
}
// localhost:3000/city/2
async function updateProduct(request,response){
    
    let pid = request.params.id;
    let newprod = request.body;
    let prod = await productsCollection.updateCollection(pid,newprod)
    // let city = await cityCollection.updateCollection({where:{id:pid}});
    // await city.update(newCity);
    response.status(200).send(prod);
}

// // localhost:3000/city/2
async function deleteProduct(request,response){
   let pid = request.params.id;
   let prod = await productsCollection.deleteCollection(pid);
   response.status(204).send('null');

}

module.exports = router;
