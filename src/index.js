const express = require('express');
const {PORT}  = require('./config/serverConfig')
const bodyParser = require('body-parser')

 const CityRepository = require('./repository/city-repository')

const setupAndstartServer =  async() =>{

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));


    app.listen( PORT , async ()=>{
        console.log(`server is started at ${PORT}`);

       const repo =  new CityRepository();
       repo.createCity ({ name : "aegd"});
       
    })
}


setupAndstartServer();