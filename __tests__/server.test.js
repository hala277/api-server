'use strict';
const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);
const { db } = require('../src/models/index.js');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('testing API server', () => {


  // bad rout
  it(' get status 404 ', async () => {
    const response = await request.get('/cityy');
    expect(response.status).toBe(404);

  });

  it(' get status 404 ', async () => {
    const response = await request.get('/sereee');
    expect(response.status).toBe(404);

  });
  // bad methode
  // it(' get status 404  ',async()=>{

  //   const response =await request.post('/city');
  //   expect(response.status).toEqual(404);

  // });

  // it(' get status 404  ',async()=>{

  //   const response =await request.post('/series');
  //   expect(response.status).toEqual(404);
  // });


  // city test routes
  //1. GET
  it('testing the city database routes', async () => {
    const response = await request.get('/city');
    expect(response.status).toBe(200);
  });
  // 2. Creat,POST
  it('testing creat city', async () => {

    const response = await request.post('/city').send({
      cityName: "amman"
    });

    expect(response.status).toEqual(200);
    
  });

  // 3. get one city ,findOne
  it('testing 200 on getOnecity', async () => {

    const response = await request.get('/city/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);

  });

  // 4. updateCity, PUT
  test('testing 200 on  updateCity', async () => {

    const response = await request.put('/city/1').send({ cityName: 'london' });

    expect(response.status).toEqual(200);
    expect(response.body.cityName).toEqual('london');
  });

  // 5. deleteCity, destroy
  it('testing delete city ', async () => {

      const response = await request.delete('/city/1');
         expect(response.status).toEqual(204);
     
    });

  // series test routes
  //1. GET
  it('testing the series database routes', async () => {
    const response = await request.get('/series');
    expect(response.status).toBe(200);
  });

  // 2. Creat,POST
  it('testing creat series', async () => {

    const response = await request.post('/series').send({
      seriesName: "CIA"
    });
    expect(response.status).toEqual(200);
  });

  // 3. get one series findOne
  it('testing 200 on getOneseries', async () => {

    const response = await request.get('/series/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);

  });

  // 4. update series, PUT
  test('testing 200 on  updateSeries', async () => {

    const response = await request.put('/series/1').send({ seriesName: 'suits' });

    expect(response.status).toEqual(200);
    expect(response.body.seriesName).toEqual('suits');
  });

  // 5. deleteSeries, destroy
  it('testing delete series ', async () => {

    const response = await request.delete('/series/1');
       expect(response.status).toEqual(204);
   
  });

});
