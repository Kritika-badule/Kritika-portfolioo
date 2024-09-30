// 

var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Java Developer", "AI Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Navbar toggle for small screens
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Project details function
function viewDetails(projectName) {
    alert('Details about ' + projectName + ' will be displayed here.');
}