//Use of filter functions

/* main difference between for each loop and filter is that 
filter returns the values while for each loop does not */


const coding=["js",'ruby','Java',"CPP"]

//for each does not return any value
const values=coding.forEach((item)=>{
    console.log(item);
    return item;
})

console.log(values)

//another example
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=>num>4)//implicit return 
console.log(newNums);

//same as above
//explicit return 
const myNums1=[1,2,3,4,5,6,7,8,9,10]

const newNums1=myNums.filter((num)=>{
    return num>4 //empty array if return won't have been used
});

console.log(newNums);

//above example with the help of for each loop

const myNums2=[]
myNums.forEach((num)=>{
    if(num>4)
    {
        myNums2.push(num)
    }
})
console.log(myNums2)

// Example of Objects in arrays
const books=[
    {
        title:"Book one",genre:"Fiction",Publish:1981,edition:2004
    },
    {
        title:"Book two",genre:"Non Fiction",Publish:1982,edition:1998
    },
    {
        title:"Book three",genre:"History",Publish:1961,edition:2001
    },
    {
        title:"Book FOUR",genre:"History",Publish:1961,edition:2001
    },
    {
        title:"Book five",genre:"islamic",Publish:1923,edition:2004
    },
    {
        title:"Book six",genre:"Science",Publish:2002,edition:2001
    }  
]

const userbooks=books.filter((bk)=>bk.genre==="History")

const userBooks=books.filter((bk)=>{
    return (bk.publish=2000)&&(bk.genre==="History")})
console.log(userbooks);
