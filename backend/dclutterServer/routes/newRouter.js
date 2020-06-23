//Use express
const express = require('express');
//Use body-parser
const bodyParser = require('body-parser');
//Import models
const Dclutter = require('../models/dclutter');
//Import cors
const cors = require('./cors');
//Create express router
const newRouter = express.Router();
newRouter.use(bodyParser.json());

newRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res) => {
    res.statusCode = 403;
    res.end('GET request not supported');
})
.post(cors.corsWithOptions, (req, res, next) => {
    Dclutter.create(req.body)
    .then(dclutter => {
        console.log('Created new object on dclutter', dclutter);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'appliction/json');
        res.json(dclutter)
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, (req, res) => {
    res.statusCode = 403;
    res.end('PUT request not supported');
})
.delete(cors.corsWithOptions, (req, res) => {
    res.statusCode = 403;
    res.end('Delete request not supported here.');
});

module.exports = newRouter;