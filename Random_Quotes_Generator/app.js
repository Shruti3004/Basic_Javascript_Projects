const button = document.querySelector('button');
const quote = document.getElementById('quote');
button.addEventListener('click', generatequotes);
function generatequotes(e){
    const quotes = [
        'Nothing lasts forever..NOT even your troubles...',
        'Self help is the best help',
        'DOn\'t quIT',
        'Take Chances, Make mistakes',
        'Being strong means rejoicing in who you are, complete with imperfections',
        'The only place you find success before work is in dictionary'
    ]
    const index = Math.floor(Math.random()*(quotes.length));
    console.log(index);
    // quote.innerHTML = `
    // <h1>${quotes[index]}</h1>`;
    // quote.style.textAlign = 'center';
    quote.textContent = quotes[index];
    e.preventdefault;
}