
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    fadeElements.forEach(el => observer.observe(el));
});

// Form validation
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
});
