
// Array of event objects
const events = [
    {
        name: "Tech Conference 2026",
        category: "Technology",
        date: "2026-11-20",
        location: "Nashik"
    },
    {
        name: "Music Festival",
        category: "Music",
        date: "2026-11-25",
        location: "Mumbai"
    },
    {
        name: "Web Development Workshop",
        category: "Workshop",
        date: "2026-12-05",
        location: "Pune"
    },
    {
        name: "Cricket Tournament",
        category: "Sports",
        date: "2026-12-10",
        location: "Nashik"
    },
    {
        name: "AI Innovation Summit",
        category: "Technology",
        date: "2026-12-15",
        location: "Pune"
    }
];

// Get HTML elements
const container = document.getElementById("eventContainer");
const search = document.getElementById("search");
const category = document.getElementById("category");
const eventDate = document.getElementById("eventDate");
const sort = document.getElementById("sort");

// Display events dynamically
function displayEvents() {

    let filteredEvents = events.filter(event => {

        const keyword = event.name.toLowerCase()
            .includes(search.value.toLowerCase());

        const categoryMatch =
            category.value === "All" ||
            event.category === category.value;

        const dateMatch =
            eventDate.value === "" ||
            event.date === eventDate.value;

        return keyword && categoryMatch && dateMatch;
    });

    // Sort events by date
    if (sort.value === "asc") {
        filteredEvents.sort((a, b) =>
            new Date(a.date) - new Date(b.date));
    }
    else if (sort.value === "desc") {
        filteredEvents.sort((a, b) =>
            new Date(b.date) - new Date(a.date));
    }

    // Clear previous cards
    container.innerHTML = "";

    // Handle no results
    if (filteredEvents.length === 0) {
        container.innerHTML =
            '<p class="no-results">No Results Found!</p>';
        return;
    }

    // Create event cards
    filteredEvents.forEach(event => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <span class="category">${event.category}</span>
            <p><b>Date:</b> ${event.date}</p>
            <p><b>Location:</b> ${event.location}</p>
        `;

        container.appendChild(card);
    });
}

// Event listeners
search.addEventListener("input", displayEvents);
category.addEventListener("change", displayEvents);
eventDate.addEventListener("change", displayEvents);
sort.addEventListener("change", displayEvents);

// Initial display
displayEvents();
