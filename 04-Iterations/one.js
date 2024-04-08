//for loop

for (let i = 0; i <= 10; i++)
{
    const element = i
    if(i==5)
    {
        console.log("5 is the best number")
    }
    console.log(element)
}
// console.log(element)//error--->block scope


for (let i = 0; i <=10; i++) {
    console.log(`Outer Loop is ${i}`)
   for (let j = 0; j <=10; j++) {
    console.log(`Outerloop is ${i} and inner loop is ${j}`);
    
   }   
}
//all tables from 0 to 10

for (let i = 0; i <=10; i++) {
    for(j=1;j<=10;j++)
    {
        console.log(i + "*" + j+"="+i*j);
    } 
}

//break and continue
for(i=1;i<=20;i++)
{
    if(i==5)
    {
        console.log("Detected 5")
        break;
    }
    console.log(`value of i is ${i}`);
}