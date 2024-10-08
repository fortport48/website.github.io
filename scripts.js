document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        // Toggle the visibility of navigation links when the menu icon is clicked
        navLinks.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-container img");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    entry.target.classList.remove("out-of-view");
                } else {
                    entry.target.classList.add("out-of-view");
                    entry.target.classList.remove("in-view");
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 10% of the image is visible
        }
    );

    images.forEach((image) => {
        observer.observe(image);
    });
});
