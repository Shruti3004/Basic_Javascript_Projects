const number = document.querySelector('h1');
function color(no){
    if(count<0)
        number.style.color = 'red';
    else if(count>0)
        number.style.color = 'green';
    else if(count==0)
    number.style.color = 'brown';
}
let count = 0;
const lower = document.getElementById('lower');
const upper = document.getElementById('upper');
lower.addEventListener('click', function(e){
    count--;
    color(count);
    number.textContent = count;
    e.preventDefault;
});
upper.addEventListener('click', function(e){
    count++;
    color(count);
    number.textContent = count;
    e.preventDefault;
});