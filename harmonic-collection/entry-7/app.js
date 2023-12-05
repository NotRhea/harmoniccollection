document.addEventListener("DOMContentLoaded", function () {
    const circleContainer = document.getElementById("circleContainer");
    const bottomPng = document.querySelector(".bottom-png");
    const circleSize = 50;
    const spacing = 100;

    bottomPng.addEventListener("click", function () {
        // Remove existing circles
        circleContainer.innerHTML = "";

        const numberOfCircles = 10;
        const bottomPngRect = bottomPng.getBoundingClientRect();

        for (let i = 1; i <= numberOfCircles; i++) {
            const circle = document.createElement("div");
            circle.classList.add("circle-image", `image${i}`);
            circleContainer.appendChild(circle);

            const positionX = bottomPngRect.left + (i - 1) * (circleSize + spacing); // Adjust spacing as needed
            const positionY = bottomPngRect.top + bottomPngRect.height - circleSize;
            circle.style.transform = `translate(${positionX}px, ${positionY}px)`;
        }
    });
});