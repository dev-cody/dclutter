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
});

dclutterRouter.route('/new')
.post((req, res) => {
    const title = req.body.title;
    const body = req.body.body;

    const newDclutter = new Dclutter({
        title,
        body
    });

    newDclutter.save()
    .then(() => res.json('New Dclutter item added to your list'))
    .catch(err => res.status(400).json('Error: ' + err));

});

dclutterRouter.route('/:id').get((req, res) => {
    Dclutter.findById(req.params.id)
    .then( dclutter => res.json(dclutter))
    .catch( err => res.status(400).json('Error' + err))
});

dclutterRouter.route('/:id').delete((req, res) => {
    Dclutter.findByIdAndDelete(req.params.id)
    .then(() => res.json('Dclutter deleted from your list'))
    .catch( err => res.status(400).json('Error' + err))
});

dclutterRouter.route('/:id').post((req, res) => {
    Dclutter.findById(req.params.id)
    .then(dclutter => {
        dclutter.title = req.body.title;
        dclutter.body = req.body.body;
        dclutter.img = req.body.img;

        dclutter.save()
        .then(() => res.json('You updated your Dclutter listing!'))
        .catch( err => res.status(400).json('Error' + err))
    })
    .catch( err => res.status(400).json('Error' + err))
});

//Export the router
module.exports = dclutterRouter;