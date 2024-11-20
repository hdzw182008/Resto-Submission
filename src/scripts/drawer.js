import '../styles/main.css';

const nav = document.querySelector('nav');
const content = document.querySelector('.content');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (event)=>{
    nav.setAttribute('id','drawer');
    event.stopPropagation();
});

content.addEventListener('click', (event)=>{
    nav.removeAttribute('id');
    event.stopPropagation();
})