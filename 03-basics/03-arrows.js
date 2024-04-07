const user = {
  username: "taimoorAhmmad",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to the website`); //this---->current context
    console.log(this); //all of the current values of the context
  },
};

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage(); //the value changed due to this keyword's current context

const user1 = {
  username: "aslam",
  price: 1999,

  greetings: function () {
    console.log(`${username},welcome to the website`); //this---->current context
  },
};

user1.username; //now you can't change the value because of the context

console.log(this); //empty

//global object in browser is window

//this value inside functions
function test() {
  let username = "Timmy";
  console.log(this.username); //undefined-->we can get context of current in objects
}
test();

//**********arrow functions***********
const test1 = () => {
  let username = "Timmy";
  return (this.username);//undefined 
};
console.log(test1);

//implicit return
const test2=(n1,n2)=>(n1+n2)//no need of return statement
const addTwo=(num1,num2)=>({username:"Taimoor"})
//if you are using curly braces in implicit return you need to use return statement else no need