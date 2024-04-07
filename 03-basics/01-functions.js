/*Functions are nothing but the package of the code in which data is placed 
and we can get copies of it many times as we want*/


//Function definition
function sayMyName()
{
    console.log("T")
    console.log("A")
    console.log("I")
    console.log("M")
    console.log("O")
    console.log("O")
    console.log("R")
}

//function reference
sayMyName

//fucntion execution
sayMyName()

//if we don't specify the type we will get the error while passing the arguments
function addTwoNumbers(number1,number2){
    console.log(number1+number2);  
}

addTwoNumbers(5,4)
addTwoNumbers(5,"a")//above issue

/*Main difference between console and return is explained with code below */
addTwoNumbers(5,4)//9

//storing it in the variable will cause error bcz we have used console instead of return
const result2=addTwoNumbers(5,4)
console.log(result2)//undefined

//Solution
function addThreeNumbers(n1,n2,n3){
    return (n1+n2+n3)
}

const result3=addThreeNumbers(5,4,6);
console.log(result3);

function logginUserName(username)
{
    return `${username} just logged in`
}

console.log(logginUserName("taimoor Ahmmad"))
console.log(logginUserName())//undefined

//checking for undefined
function logginUserName(username)
{
    if(username===undefined||!username)
    {   
        console.log("please enter the name");
        return;//this return is very imp else it js will run both the statements

    }
    return `${username} just logged in`
}
console.log(logginUserName())