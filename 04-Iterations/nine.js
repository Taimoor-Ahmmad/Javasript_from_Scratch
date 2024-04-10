//reduce method--->usually used in shopping cart applications

const myNums=[1,2,3]

const myTotal=myNums.reduce((acc,curval)=>{
    console.log(`accumulator value is ${acc} and cuurent value is ${curval}`)
    return acc+curval;
},0)

//same as above

const myAcc=myNums.reduce((acc,currval)=>(acc+currval),0)

console.log(myAcc);

//Real World example

const shoppingCart=[
    {
        itemPrice:"JS course",
        price:2000
    },
    {
        itemPrice:"Python",
        price:2000
    },
    {
        itemPrice:"Data Scientist",
        price:2000
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=>(acc+item.price),0);
console.log(priceToPay);