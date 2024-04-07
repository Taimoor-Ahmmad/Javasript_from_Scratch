//array-->collection of elements in single variable
//arrays are modifyable

const myArr=[0,1,2,3,4,5,true,"Timmy"]// all are the elements inside it

console.log(myArr[0])

//arrays always make shallow copies

/*  -> Shallow Copy:

A shallow copy is like making a copy of the box itself, 
but not the toys inside. So, if you change something inside 
the original box, it also changes in the copied box. 
It's like having two boxes, but they share the same toys.

    -> Deep Copy:

Now, a deep copy is like making a brand new box and putting 
all the toys from the original box into it. So, even if you 
change something in one box, it doesn't affect the other box 
because they each have their own set of toys.*/

const myHeros=['Batman','spiderman']

//Array Methods
myArr.push(6)//at the end of the array
myArr.pop(6)//removes last one
myArr.unshift(9)//adds last one
myArr.shift(9)//removes first one
myArr.includes(9)//return boolean value
myArr.indexOf(9)//-1 not known


// console.log(myArr)
const newArr=myArr.join()//binds in comma separated and converts in string format


/*Difference between Slice and Splice is that 
Slice does not manupilate original array while splice does */

console.log("A ",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);


const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);


