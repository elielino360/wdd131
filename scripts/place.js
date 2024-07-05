

const yearElement = document.querySelector('#currentyear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;


const lastModifiedElement = document.querySelector('#lastModified');
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modification: ${lastModified}`;