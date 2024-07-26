document.addEventListener("DOMContentLoaded", () => {
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
            mainnav.classList.remove('show');
            hambutton.classList.remove('show');
        }
    });

    const events = [
        {
            title: "Community Festival",
            date: "2024-07-15",
            location: "Central Park",
            description: "A fun-filled day for the entire family."
        },
        {
            title: "Music Concert",
            date: "2024-08-10",
            location: "City Hall",
            description: "Live performances by local bands."
        },
        {
            title: "Art Exhibition",
            date: "2024-09-05",
            location: "Art Gallery",
            description: "Showcasing art from local artists."
        },
        // Add more events as needed
    ];

    const searchBar = document.getElementById("search-bar");
    const searchResults = document.getElementById("search-results");

    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        const filteredEvents = events.filter(event => 
            event.title.toLowerCase().includes(query) ||
            event.description.toLowerCase().includes(query) ||
            event.location.toLowerCase().includes(query)
        );
        displayResults(filteredEvents);
    });

    function displayResults(events) {
        searchResults.innerHTML = "";
        if (events.length === 0) {
            searchResults.innerHTML = "<p>No events found.</p>";
        } else {
            events.forEach(event => {
                const eventElement = document.createElement("div");
                eventElement.className = "event";
                eventElement.innerHTML = `
                    <h3>${event.title}</h3>
                    <p>Date: ${event.date}</p>
                    <p>Location: ${event.location}</p>
                    <p>${event.description}</p>
                `;
                searchResults.appendChild(eventElement);
            });
        }
    }
});
