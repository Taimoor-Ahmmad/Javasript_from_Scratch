//for in Loop for objects

/*Note

1.for of loop prints the whole values(key and value pairs)
2.for in loop prints the keys only 

3.for of loop can't iterates over the objects
4.for in loop can iterate over the objects

*/

const myObject = {
  js: "Javascript",
  Cpp: "C++",
  rb: "ruby",
  swift: "Swift",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}
//for in loop for arrays
//By default array's keys start from 0
const programming = ["js", "Ruby", "py", "Java"];
for (const key in programming) {
  console.log(key);
}

//Finding the values of arrays using for in
for (const key in programming) {
    console.log(programming[key]);
}

//looping over the maps
const map=new Map();
map.set('IN',"INDIA")
map.set('PK',"Pakistan")
map.set('UK',"United Kingdom")
map.set('IN',"INDIA")

//we can't loop over the map using for in loop
for (const key in map) {
    console.log(key)
}
//there will be no error but no output as well