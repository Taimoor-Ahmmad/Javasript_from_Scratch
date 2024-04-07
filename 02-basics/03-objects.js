/* 2 ways of declaring objects literals and constructors
when we declare like a literal , singleton is not made.
constructor---->singleton
Object.create()//Constructor method----->singleton method*/


/*Objects has key and values  */


//declaring Symbol
const mySymb=Symbol("key1")

//Object Literals
const JsUser={
    name:"Taimoor",
    "full Name":"Taimoor Ahmmad",//can't access with dot
    [mySymb]:"mykey1",//accessed with square brackets
    age:18,
    location:"Jaipur",
    email:"taimoor@google.com",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Saturday"]
}

/*Two ways of accessing information
. and []*/

console.log(JsUser.age)
console.log(JsUser["email"])
console.log(JsUser["full Name"])

//changing values
JsUser.email="Ali@gmail.com"

//You can also freeze an object if you want that no one could change it
// Object.freeze(JsUser)//no changes will be propagated

//You can also use functions inside javascript objects
JsUser.greetings=function(){
    console.log("hello js user")
}


//this keyword in js
JsUser.greetingsTwo=function(){
    console.log(`hello js user,${this.name}`)
}

console.log(JsUser.greetings)//in this case function's reference is returned not the value
console.log(JsUser.greetings())//function is returned