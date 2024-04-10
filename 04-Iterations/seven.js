//Use of maps

/*
the main difference between for each loop and map is that
for each loop does not return a value while map does
*/


const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.map((num)=>num+10)
console.log(newNums)

//same above logic but with for each loop
myNumbers=[]
myNums.forEach((item)=>{
    myNumbers.push(item+10);
    return myNumbers;
})

//Chaining in maps
const nums=myNums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40);
console.log(nums)