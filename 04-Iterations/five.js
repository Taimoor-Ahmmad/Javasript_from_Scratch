//For each loop

const coding=["js",'ruby','Java',"CPP"]

//for each loop takes in callback function
coding.forEach((element) => {
    console.log(element);
});


//passing the direct function as parameter
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);

//for each do not takes the item only
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

//Most common scenario of for each loop
const arrayOfObjects=[
    {
        LanguageName:"Javascript",
        LanguageFileName:"js"
    },
    {
        LanguageName:"Python",
        LanguageFileName:"py"
    },
    {
        LanguageName:"Ruby",
        LanguageFileName:"rb"
    }
]
arrayOfObjects.forEach((item)=>{
    console.log(item.LanguageName);
})