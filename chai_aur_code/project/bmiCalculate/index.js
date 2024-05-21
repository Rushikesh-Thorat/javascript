const form = document.querySelector('form')

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const heigth = parseInt(document.querySelector('#height').value);
    const weigth = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')

    if(heigth < 0 || isNaN(heigth) || height === ''){
    result.innerHTML = (`Enter Valid Height ${heigth}`);
    }
    else if(weigth < 0 || isNaN(weigth) || weight === ''){
    result.innerHTML = (` Enter Valid Weight ${weigth}`);
    }
    else{
        const bmi = (weigth/((heigth*heigth/10000)).toFixed(2))
        result.innerHTML = (`<span>${bmi}</span>`);
    }
})