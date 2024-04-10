//for of
//Array specific loops
["", "", ""][({}, {}, {})];

const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  console.log(arr);
}

//for of on Strings

let greet = "Happy Coding";
for (const i of greet) {
  console.log(`Each char is ${greet}`);
}

//Maps-->similar to objects they have unique values
//Maps hold key value pairs and their is no repitition of values

const map=new Map();
map.set('IN',"INDIA")
map.set('PK',"Pakistan")
map.set('UK',"United Kingdom")
map.set('IN',"INDIA")//Output will be 3 objects as they are unique

console.log(map)

//looping on maps
for (const key of map) {
    console.log(key)//all values (both keys & values)
}

//for printing key and values
for (const [key,value] of map) {
    console.log(`key is ${key}, and value is ${value}`);
}

//for of loop on Objects
const myObj={
    'name':"Taimoor",
     age:23,
     uni:"PUCIT"
}

for (const [key,value] of myObj) {
    console.log(key,value)
}//error objects are not iterate