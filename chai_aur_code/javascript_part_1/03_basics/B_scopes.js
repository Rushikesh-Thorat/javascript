
let a =100
if(true){
    let a = 10
    const b = 20
    var c = 30
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username ="rushi"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}
// one()

if(true){
    const username = "rushi"
    if(username === "rushi"){
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}