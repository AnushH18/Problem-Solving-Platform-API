const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./src/config/server.config');
const {apiroute} = require('./src/routers');
const errorHandler = require('./src/utils/errorHandler');
const connectToDB = require('./src/config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("home");
})

app.use('/api', apiroute);

app.get('/ping', (req,res)=>{
    res.send("home ping !");
})

app.use(errorHandler);

app.listen(PORT,async ()=>{
    console.log(`Server is running on port: ${PORT}`);
    await connectToDB();
    console.log("Successfully connected to DB");
})