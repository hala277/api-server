'use strict';

const express = require('express');
// const{City} = require('../models/index.js');
const router = express.Router();
const {cityCollection} = require('../models/index.js');

// Routes
router.get('/city',getCity);
router.post('/city',creatCity);
router.get('/city/:id',getOneCity);
router.put('/city/:id',updateCity)
router.delete('/city/:id',deleteCity);

// localhost:3000/city
async function getCity(request,response){
let city = await cityCollection.readCollection();
response.status(200).json(city);
}

// localhost:3000/city(body:{cityName:'amman'})
async function creatCity(request,response){
    let newCity = request.body;
    let city = await cityCollection.createCollection(newCity);
    response.status(200).json(city);
}
// localhost:3000/city/2
async function getOneCity(request,response){
    let pid = parseInt(request.params.id);
    let city = await cityCollection.readCollection(pid);
    response.json(city);
}
// localhost:3000/city/2
async function updateCity(request,response){
    
    let pid = request.params.id;
    let newCity = request.body;
    let city = await cityCollection.updateCollection(pid,newCity)
    // let city = await cityCollection.updateCollection({where:{id:pid}});
    // await city.update(newCity);
    response.status(200).send(city);
}

// // localhost:3000/city/2
async function deleteCity(request,response){
   let pid = request.params.id;
   let city = await cityCollection.deleteCollection(pid);
   response.status(204).send('null');

}

module.exports = router;
