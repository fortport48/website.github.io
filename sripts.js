document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        // Toggle the visibility of navigation links when the menu icon is clicked
        navLinks.classList.toggle('show');
    });
});
