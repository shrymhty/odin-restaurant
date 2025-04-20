import './styles.css'
import { renderMenu } from './menu.js';
import {renderHome} from './home.js'
import { renderContact } from './contact.js';

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

function clearContent() {
    const content = document.getElementById('content');
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    };
    home.style.textDecoration = 'none';
    menu.style.textDecoration = 'none';
    contact.style.textDecoration = 'none';
}

home.addEventListener('click', () => {
    clearContent();
    renderHome();
});

menu.addEventListener('click', () => {
    clearContent();
    renderMenu();
});

contact.addEventListener('click', () => {
    clearContent();
    renderContact();
});

renderHome();