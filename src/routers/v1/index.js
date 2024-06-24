const express = require('express');
const problemRoute = require('./problems.routes');

const v1route = express.Router();

v1route.get('/ping', (req,res)=>{
    return res.json({msg : "in v1 route"});
})

v1route.use('/problems', problemRoute); 

module.exports = v1route; 