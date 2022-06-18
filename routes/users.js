const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../model/User');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

function getErrors(error) {
  let errorArray = [];
  if (error) {
    if (error.errors['email']) {
      console.log(error.errors['email'].message)
      errorArray.push(error.errors['email'].message);
    }
    if (error.errors['tag']) {
      console.log(error.errors['tag'].message)
      errorArray.push(error.errors['tag'].message);
    }
    if (error.errors['domain']) {
      console.log(error.errors['domain'].message)
      errorArray.push(error.errors['domain'].message);
    }
    } else {
      console.log('No Errors Product Saved Succefully')
    }
    return errorArray;
  };

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
  .catch((error) => {
    let e = getErrors(error);
    var err = new Error(e.toString());
    err.status = 404;
    next(err);
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