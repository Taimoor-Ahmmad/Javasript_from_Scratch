const user = {
    username: "taimoor",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}





function User(username, loginCount, isLoggedIn){
    this.username = username;//this.username is a variable
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //you can use greeting method as well
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Taimoor", 12, true)
const userTwo = new User("Excellent Code", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);