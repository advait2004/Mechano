const services = [
    { name: "Ravi JCB", type: "JCB", category: "vehicles", location: "Chennai" },
    { name: "Kumar Crane", type: "Crane", category: "vehicles", location: "Bangalore" },
    { name: "Sri Lorry", type: "Lorry", category: "vehicles", location: "Hyderabad" },
    { name: "Auto Mechanic", type: "Mechanic", category: "services", location: "Chennai" },
    { name: "Quick Plumber", type: "Plumber", category: "services", location: "Bangalore" },
    { name: "Daily Labour Group", type: "Labour", category: "labour", location: "Chennai" },
    { name: "Construction Helpers", type: "Labour", category: "labour", location: "Hyderabad" }
];

const subCategories = {
    vehicles: ["JCB", "Crane", "Lorry"],
    services: ["Mechanic", "Plumber", "Electrician"],
    labour: ["Labour"]
};

// Render results
function renderResults(filteredServices) {
    const results = document.getElementById("resultsGrid");
    results.innerHTML = "";

    if (filteredServices.length === 0) {
        results.innerHTML = "<p style='text-align:center'>No services found for selected location.</p>";
        return;
    }

    filteredServices.forEach(s => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${s.name}</h3>
            <p><strong>Service:</strong> ${s.type}</p>
            <p><strong>Location:</strong> ${s.location}</p>
            <button onclick="bookService('${s.name}')">Book Now</button>
        `;
        results.appendChild(card);
    });
}

// Book button action
function bookService(serviceName) {
    alert(`Booking request sent for ${serviceName}!`);
}

// Get selected location
function getSelectedLocation() {
    return document.getElementById("locationSelect").value;
}

// Show subcategories
function showSubCategory(type) {
    const subDiv = document.getElementById("subCategories");
    subDiv.innerHTML = "";
    subCategories[type].forEach(sub => {
        const div = document.createElement("div");
        div.className = "sub-category";
        div.innerText = sub;
        div.onclick = () => filterBySub(sub);
        subDiv.appendChild(div);
    });
}

// Filter by subcategory
function filterBySub(subType) {
    const location = getSelectedLocation();
    let filtered = services.filter(s => s.type === subType);
    if (location) filtered = filtered.filter(s => s.location === location);
    renderResults(filtered);
}

// Global search
function globalSearch() {
    const query = document.getElementById("globalSearch").value.toLowerCase();
    const location = getSelectedLocation();

    let filtered = services.filter(s =>
        s.name.toLowerCase().includes(query) ||
        s.type.toLowerCase().includes(query)
    );

    if (location) filtered = filtered.filter(s => s.location === location);

    renderResults(filtered);
}

// Update results when location changes
document.getElementById("locationSelect").addEventListener("change", () => {
    globalSearch();
});

// Initial render
renderResults(services);
