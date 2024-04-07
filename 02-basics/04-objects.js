// const tinderUser=new Object()//Singleton object


const tinderUserObj={}//Non singleton

tinderUserObj.id="123abc"
tinderUserObj.name="sam"
tinderUserObj.isLoggedIn=false


// console.log(tinderUserObj);

//objects inside another object

const regularUser={
    email:"taimoor@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Taimoor",
            LastName:"Ahmmad ",

        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

/*we want to combine two objects
{}--->target object and all others act as source*/ 

// const obj3=Object.assign({},obj1,obj2)

//best way
const obj3={...obj1,...obj2}

console.log(obj3)


const users=[
    {
        id:1,
        email:"taimoorahmmad890@gmail.com"
    },
    {
        id:2,
        email:"ali@gmail.com"
    }
]

console.log(tinderUserObj);

//now i want to find keys of tinderUserObj
console.log(Object.keys(tinderUserObj));//very important
console.log(Object.values(tinderUserObj));//very important
console.log(Object.entries(tinderUserObj));//very important


console.log(tinderUserObj.hasOwnProperty('isLoggedIn'))//boolean


//Object destructure and Json api

const course={
    coursename:"Js in hindi",
    coursePrice:999,
    courseInstructor:"Taimoor",

}

const {courseInstructor}=course
// OR
const {courseInstructor:instructor}=course

console.log(courseInstructor)

//Api formats

// 1.JSON 
// 2.Arrays format

