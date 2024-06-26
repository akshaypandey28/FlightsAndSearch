const express=require("express");
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig.js')

const setupAndStartServer= async () => {
    //create the express object
    const app=express();
    app.use(bodyParser.json)
    app.use(bodyParser.urlencoded)
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        //console.log(process.env);
    });
}

setupAndStartServer();