// selecting buttons and body

const button1 = document.querySelector('#grey');
const button2 = document.querySelector('#white');
const button3 = document.querySelector('#blue');
const button4 = document.querySelector('#yellow');
const body = document.body;

// adding click event to selected buttons
button1.addEventListener('click', () => {
    body.style.backgroundColor = 'grey';
})
button2.addEventListener('click', () => {
    body.style.backgroundColor = 'white';
})
button3.addEventListener('click', () => {
    body.style.backgroundColor = 'blue';
})
button4.addEventListener('click', () => {
    body.style.backgroundColor = 'yellow';
})