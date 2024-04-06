const name='Taimoor Ahmmad'
const value=50

//newer way
console.log(`my name is ${name} and my value is ${value}`);

//another method of declaring string
const newString=new String("Taimoor Ahmmad");//this way we get diff properties and methods
//newString.(methods)

const string01=newString.substring(0,4);
console.log(string01);

const string02=newString.slice(0,1)
console.log(string02);


const url="taimoor ahamad890@gmail.com"
console.log(url.replace('%20','-'))

console.log(url.split("-"));