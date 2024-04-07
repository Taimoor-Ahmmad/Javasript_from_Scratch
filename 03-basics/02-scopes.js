// let a = 10;
// const b = 20;
// var c = 30;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

console.log(a)//error 
console.log(b)//error
console.log(c)//not error--->global scope issue


/*global scopes are different in each sections ,different in window's console as well in node environment */

//Scope level 

function One()
{
    const username="Taimoor "
    function Two()
    {
        const website="taimoorportfolio.vercel"
        console.log(username)
    }
    console.log(website)

    Two();
}

One()

//Similarly

if(true)
{
    const username="Taimoor"
    if(username==="Taimoor")
    {
        const website="Youtube.com"
        console.log(username+website);

    }
    console.log(website)
}
console.log(username)

//*****Interesting Example*********** */


//Hoisting in js
console.log(addone(5))//it will return
function addone(num){
    return num+1
}

console.log(addTwo(6))//it won't be executed 
function addTwo(num)
{
    return num+2
}
