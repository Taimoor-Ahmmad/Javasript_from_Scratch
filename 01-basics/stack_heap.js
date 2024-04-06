//stack---->primitive
//heap----->Non Primitive

let myYoutubeName="taimoorahmmad890@gmail.com"
let anothername=myYoutubeName
anothername="chai aur javascript"

//now the problem arises what would be the value of myYoutubeName?
console.log(myYoutubeName)


let userOne={
    email:"taimoorahmmad890@gmail.com",
    upi:"user@hbl"
}

let userTwo=userOne
userTwo.email="zainahmad890@gmail.com"
console.log(userTwo);
console.log(userOne )