const menuButton = document.querySelector("#menuButton");
const closeMenuButton = document.querySelector("#closeMenu");
const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector("#overlay");
const menuLinks = document.querySelectorAll(".sidebar-nav a");

function openMenu() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}

menuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});