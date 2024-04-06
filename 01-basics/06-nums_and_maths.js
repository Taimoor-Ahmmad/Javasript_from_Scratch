const score=400
console.log(typeof(score))//number


//explicitly defining that we will get Number here
const balance=new Number(100.00);
console.log(typeof(balance))//object

console.log(balance.toString().length)
console.log(balance.toFixed(2))//100.00

const anotherNumber=123.8966
console.log(anotherNumber.toPrecision(3))//124

const hundereds=100000
console.log(hundereds.toLocaleString('en-IN'));

// +++++++++++  Maths +++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(22.1));
console.log(Math.min(3,4,5,6));
console.log(Math.random())// 0-1
console.log(Math.floor(Math.random()*10)+1)// 0-1

