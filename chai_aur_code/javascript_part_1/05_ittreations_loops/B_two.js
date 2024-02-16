// for of ----------------------------------------------------

const arr = [1,2,3,4,5]

for (const num of arr) {
 //   console.log(num);
}

const map = new Map()
map.set('in','india')
map.set('usa','us america')
map.set('fr','france')

// console.log(map);

for (const [key , value] of map) {
   // console.log(key , ':-', value);
}



// for in ------------------------------------------------- 

// const myObj = {
//     game1 : 'fns',
//     game2 : 'spider man' 
// }
// for (const key in myObj) {
//     console.log(`${key} is ${myObj[key]}`);
// }

const programming = ["js","c","java","python"]

for (const key in programming) {
  // console.log(programming[key]);
}


// for each ------------------------------------------------

const coding = ["js","c","java","python","cpp","ruby","rust"]

// coding.forEach( function name(val){
//     console.log(val);
// } )

// coding.forEach( (item)=> {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
