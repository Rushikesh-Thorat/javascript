document.getElementById('clock')
// document.querySelector('clock');

let date = new Date()
console.log(date.toLocaleTimeString());

setInterval(function(){
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)