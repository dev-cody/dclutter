//Use express
const express = require('express');
//Use body-parser
const bodyParser = require('body-parser');
//Import models
const Dclutter = require('../models/dclutter');
//Create express router
const dclutterRouter = express.Router();
dclutterRouter.use(bodyParser.json());

dclutterRouter.route('/')
.get((req, res, next) => {
    Dclutter.find()
    .then(dclutter => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dclutter);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Dclutter.create(req.body)
    .then(dclutter => {
        console.log('Created new object on dclutter', dclutter);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'appliction/json');
        res.json(dclutter)
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT request not supported');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('Delete request not supported here.');
});

dclutterRouter.route('/:dclutterId')
.get((req, res, next) => {
    Dclutter.findById(req.params.dclutterId)
    .then(dclutter => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dclutter);
    })
    .catch(err => next(err));
})
.post((req,res) => {
    res.statusCode = 403;
    res.end('POST request is not supported here.')
})
.put((req, res, next) => {
    Dclutter.findByIdAndUpdate(req.params.dclutterId, {
        $set: req.body
    }, { new: true })
        .then(dclutter => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dclutter);
        })
        .catch(err => next(err));
})
.delete((req, res, next) => {
    Dclutter.findByIdAndDelete(req.params.dclutterId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err))
});

//Export the router
module.exports = dclutterRouter;