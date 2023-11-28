const hoverText = document.querySelector('.hover-text');
const gifOverlay = document.querySelector('.gif-overlay');

hoverText.addEventListener('mouseover', () => {
    gifOverlay.style.opacity = '1';
});

hoverText.addEventListener('mouseout', () => {
    gifOverlay.style.opacity = '0';
});