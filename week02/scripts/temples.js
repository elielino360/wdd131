

const yearElement = document.querySelector('#currentyear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;


const lastModifiedElement = document.querySelector('#lastModified');
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modification: ${lastModified}`;


const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const h1 = document.querySelector('h1'); 

function toggleMenu() {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    h1.classList.toggle('show');
}

hambutton.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
        h1.classList.remove('show');
    }
});
