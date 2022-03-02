'use strict';



const { request, response } = require("express");

module.exports = (request,response,next) => {
  
    if(request.query.name)
    {
        next();
    }
    else{
        next('its not a name')
    }

   
}