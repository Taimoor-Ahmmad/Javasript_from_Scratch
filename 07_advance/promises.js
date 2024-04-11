/*The Promise object represents the eventual completion (or failure) of an asynchronous
 operation and its resulting value. 
 Promises can be handled with async and await as well
 */

//Promise reduces call back hell as well
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls,Cryptography related tasks,network call
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
}); //Created promise

//Consumption of Promise----->resolve is related to .then
promiseOne.then(function () {
  setTimeout(function () {
    console.log("Promise Consumed");
  }, 1000);
});

//Another way
new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async Task 02");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "abc", email: "abc@example.com" });
  }, 1000);
});
//connecting resolve and .then
promiseThree.then(function (user) {
  console.log(user);
});

//Fourth Promise
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    //resolve
    if (!error) {
      resolve({ username: "abc", password: "123" });
    }
    //rejection----->error
    else {
      reject("Error:Something went wrong");
    }
  }, 2000);
});

//can't use below method for extracting data

// const username=promiseFour.then(()=>{
//     console.log(user);
//     return user.username
// })

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is resolved finally"));

