const myH1 = document.querySelectorAll('h1');
myH1[0].style.color= "green";

const tempLiList = document.querySelectorAll('li');
// tempLiList[1].style.backgroundColor = "blue";
// tempLiList[0].style.color = "blue";

const listTemp = document.getElementsByClassName('li')

const convertArr = Array.from(listTemp)

convertArr.forEach(function(li){
li.style.color = 'orange';

})



 