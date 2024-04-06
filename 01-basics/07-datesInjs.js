//Dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

let myCreatedDate=new Date(2024,7,4)
console.log(myCreatedDate.toDateString());

let myTimeStamps=Date.now()
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())


let currentCalenderDay=newDate.toLocaleString('default',{
    calendar:"long"
})

console.log(currentCalenderDay);