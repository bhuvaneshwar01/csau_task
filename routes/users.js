const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../model/User');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
.get((req,res,next)=>{
  User.find({})
  .then((users) => {
    res.status = 200;
    res.setHeader('Content-Type','application/json');
    res.json(users);
  },(err) => next(err))
  .catch((err) => next(err));
})
.post((req,res,next) => {
  User.create(req.body)
  .then((users) => {
    res.status = 200;
    res.setHeader('Content-Type','application/plain');
    res.send("Successfully updated");
  })
  .catch((err) => {
    res.status = 404;
    res.setHeader('Content-Type','application/plain');
    res.send("Enter valid input!")
    
  });
})
.delete((req,res,next) => {
  User.remove({})
  .then((users) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json(users);
  },(err) => next(err))
  .catch((err) => next(err));
});

module.exports = userRouter;