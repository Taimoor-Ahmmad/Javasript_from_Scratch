// we are sure here that score is a value
let score="33abc"
let score1=undefined
let score2=null
let score3=true
let score4=NaN

// every score will be converted into number

//we are not sure here---> the value can be anything
// const {score}=req.body

//string is converted into number
let valueInNumber= Number(score);

console.log(typeof(valueInNumber));

console.log(valueInNumber)

/*Javascript has a flaw while converting the  number if 
33abc is not a number but conversion is still possible*/

let isLoggedIn=1
console.log(Boolean(isLoggedIn))//true

let isLoggedIn1=""
console.log(Boolean(isLoggedIn))//false

