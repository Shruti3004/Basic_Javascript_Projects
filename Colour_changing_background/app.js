const button = document.querySelector('button');
const body = document.querySelector('body');
const heading = document.querySelector('h1');
body.style.background = 'teal';
button.addEventListener('click', changebackground);
function changebackground(e){
    const hexvalues=[
        0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'
    ];
    let hexcolor = '#';
    for(let i=0; i<6; i++){
        const index = Math.floor(Math.random()*(hexvalues.length));
        hexcolor+= hexvalues[index] ;
    }
    heading.textContent = hexcolor;
    body.style.background = hexcolor;
    e.preventdefault();
}