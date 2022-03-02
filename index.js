'use strict';
// define dotenv
require('dotenv').config();


const server = require('./src/server.js');
const {db} = require('./src/models/index.js');
// const res = require('express/lib/response');

db.sync().then(() => {
    server.start(process.env.PORT || 3001)
})

.catch(console.error)
// here if the port is not working it will try the other one
// server.start(process.env.PORT || 3001)