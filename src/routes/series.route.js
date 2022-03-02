'use strict';

const express = require('express');
const{Series} = require('../models/index.js');
const router = express.Router();
const {seriesCollection} = require('../models/index.js');

// Routes
router.get('/series',getSeries);
router.post('/series',creatSeries);
router.get('/series/:id',getOneSeries);
router.put('/series/:id',updateSeries)
router.delete('/series/:id',deleteSeries);

// localhost:3000/series
async function getSeries(request,response){
let series = await seriesCollection.readCollection();
response.status(200).json(series);
}

// localhost:3000/series(body:{cityName:'amman'})
async function creatSeries(request,response){
    let newSeries = request.body;
    let series = await seriesCollection.createCollection(newSeries);
    response.status(200).json(series);
}
// localhost:3000/series/2
async function getOneSeries(request,response){
    let pid = parseInt(request.params.id);
    let series = await seriesCollection.readCollection(pid);
    response.json(series);
}
// localhost:3000/series/2
async function updateSeries(request,response){
    let pid = request.params.id;
    let newSeries = request.body;
    let series = await seriesCollection.updateCollection(pid,newSeries);
    // await series.update(newSeries);
    response.status(200).send(series);
}

// localhost:3000/series/2
async function deleteSeries(request,response){
    let pid = request.params.id;
   let series = await seriesCollection.deleteCollection(pid);
   response.status(204).send('null');

}

module.exports = router;
