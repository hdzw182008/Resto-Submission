import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './drawer.js';
import DATA from '../public/data/DATA.json';
const menuList = document.querySelector('.menu');

console.log(DATA)
const displayResult = (menuData)=>{
    //restaurants itu nama bawaan dari jsonnya
    menuData.restaurants.forEach(item=>{
        menuList.innerHTML+= `
        <article class="menu_item">
            <img src="${item.pictureId}" alt="Menu" class="menu_pic">
            <div class="menu_detail">
            <h3 class="menu_name">${item.name}</h3>
            <span class="menu_rating">⭐${item.rating}</span>
            <p class="menu_desc">${item.description}</p>
            <p class="menu_city">${item.city}</p>
            </div>
        </article>`;
    });
};
displayResult(DATA);