import './style.css';
import home from './pages/home';
import firstload from './functions/firstload';
import render from './functions/render';
import atmosphere from './pages/atmosphere';
import menu from './pages/menu';

firstload();

const home_btn = document.getElementById('home_btn');
const atmosphere_btn = document.getElementById('atmosphere_btn');
const menu_btn = document.getElementById('menu_btn');
const contact_btn = document.getElementById('contact_btn');

home_btn.addEventListener('click', () => {
    render();
    home();
})

atmosphere_btn.addEventListener('click', () => {
    render();
    atmosphere();
})

menu_btn.addEventListener('click', () => {
    render();
    menu();
})

contact_btn.addEventListener('click', () => {
    render();

})
