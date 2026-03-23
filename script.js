// Function to switch sections
function showSection(id) {
    document.querySelectorAll("section").forEach(section => section.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// Hero cards data
const heroCardsData = [
    { icon: "💣", title: "Blasting", text: "Safe blasting operations." },
    { icon: "🧱", title: "Materials", text: "Quality materials." },
    { icon: "🏗️", title: "Projects", text: "Efficient execution." }
];

// Service cards data
const serviceCardsData = [
    { img: "images/Blast1.jpg", title: "Blasting Work", text: "Safe blasting operations." },
    { img: "images/Blast2.jpg", title: "Material Supply", text: "Top quality materials." },
    { img: "images/Blast3.jpg", title: "Project Management", text: "Smart execution planning." }
];

// Generate hero cards dynamically
const heroContainer = document.getElementById("hero-cards");
heroCardsData.forEach(card => {
    heroContainer.innerHTML += `
        <div class="col-12 col-md-4">
            <div class="hero-card">
                <div class="icon">${card.icon}</div>
                <h3>${card.title}</h3>
                <p>${card.text}</p>
            </div>
        </div>
    `;
});

// Generate service cards dynamically
const serviceContainer = document.getElementById("service-cards");
serviceCardsData.forEach(card => {
    serviceContainer.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <img src="${card.img}">
                <h3 class="p-2">${card.title}</h3>
                <p class="p-2">${card.text}</p>
            </div>
        </div>
    `;
});

// Show home section by default
window.onload = () => showSection('home');