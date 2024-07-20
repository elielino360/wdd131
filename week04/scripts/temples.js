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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Adelaide, Australia",
        dedicated: "2001-06-15",
        area: 116642,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/800x500/adelaide-australia-temple-lds-675332-wallpaper.jpg"

    },
    {
        templeName: "Belém Brazil",
        location: "Belém, Para, Brazil",
        dedicated: "2002-11-22",
        area: 12300,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/800x500/belem_brazil_temple_exterior2.jpg"

    },
    {
        templeName: "Asunción Paraguay",
        location: "Asunción, Alto Paraguay, Paraguay",
        dedicated: "2002-05-19",
        area: 42355,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/800x500/2-5b20486ae3876279c35be147ef9e63aec256a459.jpeg"
    }

];

function createTempleCard(filterFn) {
    const imageGrid = document.querySelector(".image-grid");
    imageGrid.innerHTML = ""; 
    temples.filter(filterFn).forEach(temple => {
        let card = document.createElement("section");
        let Name = document.createElement('h3');
        Name.classList.add("temple-name");

        let location = document.createElement('p');
        location.classList.add('temple-location');

        let dedication = document.createElement('p');
        dedication.classList.add("temple-dedication");

        let area = document.createElement('p');
        area.classList.add("temple-area");

        let img = document.createElement('img');
        img.classList.add("temple-img");

        Name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size: </span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(Name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        imageGrid.appendChild(card);
    });
}

const filterFunctions = {
    home: () => true,
    old: temple => new Date(temple.dedicated).getFullYear() < 1900,
    new: temple => new Date(temple.dedicated).getFullYear() > 2000,
    large: temple => temple.area > 90000,
    small: temple => temple.area < 10000
};

document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const filterType = event.target.title.toLowerCase();
        createTempleCard(filterFunctions[filterType]);
    });
});


createTempleCard(filterFunctions.home);
