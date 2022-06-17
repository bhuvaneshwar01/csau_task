const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

const maxAgeRouter = express.Router();
maxAgeRouter.use(bodyParser.json());

var people = [
    {
       "firstName": "Joe",
       "lastName": "Jackson",
       "gender": "male",
       "age": 28,
       "number": "7349282382"
    },
    {
       "firstName": "Christina",
       "lastName": "Richards",
       "gender": "female",
       "age": 24,
       "number": "4567546750"
    },
     {
       "firstName": "Michael",
       "lastName": "John",
       "gender": "male",
       "age": 37,
       "number": "8437882382"
    },
    {
       "firstName": "James",
       "lastName": "Smith",
       "gender": "male",
       "age": 32,
       "number": "5678568567"
    },
    {
       "firstName": "Emily",
       "lastName": "Jones",
       "gender": "female",
       "age": 37,
       "number": "6789536758"
    },
    {
       "firstName": "Brian",
       "lastName": "Robinson",
       "gender": "male",
       "age": 36,
       "number": "5789246856"
    },
    {
       "firstName": "Luna",
       "lastName": "Erickson",
       "gender": "female",
       "age": 29,
       "number": "4567546753"
    },
    {
       "firstName": "Ethan",
       "lastName": "White",
       "gender": "male",
       "age": 34,
       "number": "4567546752"
    }  
  ];

const result = [];
var max = 0;

for(const key of people){
  if(max < key.age){
     max = key.age;
   }
}
var count = 0;
for(const key of people){
   if(key.age === max){
      result.push({
         "firstName" : key.firstName,
         "lastName" : key.lastName,
         "gender" : key.gender,
         "age": key.age,
         "number" : key.number
      });
      count = count+1;
   }
}


maxAgeRouter.route('/')
.get((req,res,next) =>{
    try {
         res.statusCode = 200;
         res.setHeader('Content-Type','application/json');
         res.json(result);
    } catch (error) {
        console.log(error)
    }
});

module.exports = maxAgeRouter;