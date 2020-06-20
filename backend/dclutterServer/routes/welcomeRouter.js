//Use express
const express = require('express');
//Use body-parser
const bodyParser = require('body-parser');
//Create express router
const welcomeRouter = express.Router();
welcomeRouter.use(bodyParser.json());

welcomeRouter.route('/')
.get((req, res, next) => {
    
})