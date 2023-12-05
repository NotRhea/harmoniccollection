function startFalling() {
    const text = "MY LOVE LETTER TO COFFEE...";
    
    for (let i = 0; i < text.length; i++) {
        const letter = document.createElement('span');
        letter.innerText = text.charAt(i);
        letter.style.position = 'absolute';
        letter.style.left = Math.random() * 80 + 'vw'; // Random horizontal position
        letter.style.animation = 'fall 2s linear'; // Falling animation
        document.getElementById('falling-text').appendChild(letter);
    }
}