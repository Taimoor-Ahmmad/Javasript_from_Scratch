const marvel_heros=["thor",'Ironman',"spiderman"]
const dc_heros=['superman','flash','batman']

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3]);//itself an array

let result=marvel_heros.concat(dc_heros);//concat returns a new array rather than the same one
console.log(result);

/*Difference between spread and concate operator is that
concat is limited to only two arrays or elements while spread focuses on many
elements as well*/

//you can use concate and spread operator as well but spread operator is preferred

const another_array=[1,2,3,4,[5,6,7],8,[9,10,11]];

const useable_another_array=another_array.flat(Infinity)
console.log(useable_another_array);


//used in data scrapping

console.log(Array.isArray("Taimoor"))
console.log(Array.from("Taimoor"))//created a new array
console.log(Array.from({name:"Taimoor"}))//compiler is confused because it does not know whether which thing should i make Array of

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));