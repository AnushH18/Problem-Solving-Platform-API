const express = require('express');
const v1route = require('./v1');
const apiroute = express.Router();

apiroute.get('/ping', (req,res)=>{
    res.send("In api route");
})

apiroute.use('/v1', v1route);

module.exports = {
    apiroute
}