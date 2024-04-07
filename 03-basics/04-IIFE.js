//Immediately invoked function expression


//why we need them---->because there is a problem of polution of global scope
(function testDB(){
    console.log("Database connected")
})();//for two or more IIFEs

((name)=>{
    console.log('Db connected ')
})("Taimoor")

//first parenthesis --->function definition
//second parenthisis----->funtion execs