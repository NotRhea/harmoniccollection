
// JavaScript to add 'loaded' class after images are loaded
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");
    images.forEach((img) => {
        img.addEventListener("load", () => {
            img.classList.add("loaded");
        });
    });
});
