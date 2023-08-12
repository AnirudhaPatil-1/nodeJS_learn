// console.log("Hello world!");

//custom script -> npm scriptName

// function add (value1, value2){
//     return value1 + value2;
// };

const math = require('./math.js');

// // console.log(add); //Anirudha

// // console.log(add(2, 3));
// console.log(math); 
// // O/P -> { addFn: [Function: add], subtractFn: [Function: subtract] }

// console.log("add function: " + math.addFn(2, 3));
// console.log("subtract function: " + math.substractFn(2, 3));

// const {add, substract} = require("./math");
// console.log(add(2,3));
// console.log(substract(2,3));


console.log("math: " + math);

const fs = require('fs');
console.log(fs);