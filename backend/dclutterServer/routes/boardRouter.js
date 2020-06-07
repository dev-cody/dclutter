//Use express
const express = require('express');
//Use body-parser
const bodyParser = require('body-parser');
//Import models
const Board = require('../models/board');
//Create express router
const boardRouter = express.Router();
boardRouter.use(bodyParser.json());

boardRouter.route('/')
.get((req, res, next) => {
    Board.find()
    .then(board => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(board);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Board.create(req.body)
    .then(board => {
        console.log('Created new object on board', board);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'appliction/json');
        res.json(board)
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

boardRouter.route('/:boardId')
.get((req, res, next) => {
    Board.findById(req.params.boardId)
    .then(board => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(board);
    })
    .catch(err => next(err));
})
.post((req,res) => {
    res.statusCode = 403;
    res.end('POST request is not supported here.')
})
.put((req, res, next) => {
    Board.findByIdAndUpdate(req.params.boardId, {
        $set: req.body
    }, { new: true })
        .then(board => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(board);
        })
        .catch(err => next(err));
})
.delete((req, res, next) => {
    Board.findByIdAndDelete(req.params.boardId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err))
});

//Export the router
module.exports = boardRouter;