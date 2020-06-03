const plus = document.querySelector('.plus');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal');
const allclear = document.querySelector('.all-clear');
const input = document.querySelector('.input');
const alert = document.querySelector('.alert');
const numbers = document.querySelectorAll('.number');

numbers.forEach(function(number){
    number.addEventListener('click', function(e){
        let val= e.target.dataset.num;
        input.value += val;
    })
});
plus.addEventListener('click', function(e){
    input.value += '+';
});
subtract.addEventListener('click', function(e){
    input.value += '-';
});
multiply.addEventListener('click', function(e){
    input.value += '*';
});
divide.addEventListener('click', function(e){
    input.value += '/';
});
decimal.addEventListener('click', function(e){
    input.value += '.';
});
equal.addEventListener('click', function(e){
    if(input.value === ''){
        alert.style.display = 'block';
        setTimeout(function(){
            alert.style.display = 'none';
        }, 2000);
    }else{
        let answer = eval(input.value);
        input.value = answer;
    }
});
allclear.addEventListener('click', function(e){
    if(input.value === ''){
        alert.style.display = 'block';
        setTimeout(function(){
            alert.style.display = 'none';
        }, 2000);
    }else{
        if(confirm('Are you sure?')){
            input.value = '';
        }
    }
});