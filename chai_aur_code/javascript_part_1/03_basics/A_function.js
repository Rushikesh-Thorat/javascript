function sayMyname(){
    console.log("R");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
}

// sayMyname()

function addTwoNo(number1,number2){
    // console.log(number1 + number2)
     return number1 + number2
}
// addTwoNo(3,8)
const result = addTwoNo(3,8)
// console.log("Result : ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter a Username")
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())

function calculateCarPrice(...num1){
    return num1
}
// console.log(calculateCarPrice(200,400,500))

const user = {
    username : "rushi",
    price : 199

}
function handleObject(anyobj){
    console.log(`username is ${anyobj.username} and Price Is ${anyobj.price}`)
}
// handleObject(user)
handleObject({
    username :"ajit",
    price : 299
})

const myNewArray= [200,300,400,100]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,100]))

