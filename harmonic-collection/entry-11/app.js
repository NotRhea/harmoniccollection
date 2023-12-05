const tex = "MY LOVE LETTER TO COFFEE";



const text = `Embracing the Daily Ritual: A Love Letter to Coffee\n\nThe quiet moments before dawn unfold a ritual, a mundane yet magical preparation of that perfect cup of coffee. For me, coffee is not just a beverage; it's an intimate companion weaving through the tapestry of my daily life.\n\nThe Aroma of Anticipation:\nThe scent of coffee beans, freshly ground and eager to meet hot water, is an enchanting prelude—a fragrant promise of possibility and productivity. The grinder's whir and the espresso machine's hiss form a comforting soundtrack, a symphony accompanying my mornings.\n\nA Cup of Comfort:\nCoffee is more than a caffeine boost; it's a warm embrace in a ceramic mug. It wraps around me like a cozy blanket, providing solace in solitude or companionship in shared conversations. The first sip is a revelation—a delicate dance of bitterness and warmth awakening both senses and spirit.\n\nA Catalyst for Creativity:\nIn the quiet of a coffee shop, amidst the hum of conversations and the rhythmic clatter of cups, creativity finds its haven. Coffee fuels not just wakefulness but the imaginative realms of my mind. It's the elixir that transforms thoughts into eloquent words and the blank page into a canvas awaiting inspiration.\n\nCultural Connections in a Cup:\nBeyond the personal ritual, coffee connects me to a broader world. Each cup tells a story—of distant landscapes where beans are cultivated, of the hands that harvest them, and the journeys they undertake to reach my kitchen. It's a cultural exchange in a cup, a sip transcending geographical boundaries.\n\nCommunity and Conversation:\nCoffee is a catalyst for connection. Whether shared over a business meeting, catching up with a friend, or nestled in a quiet moment with a loved one, it fosters a sense of community. In the simple act of pouring a cup for someone, we share not just the beverage but a moment—a conversation lingering long after the last drop.\n\nFinding Balance in the Bean:\nIn a world that often spins too fast, coffee grounds me. It's a pause button, inviting me to savor the present moment. The ritual of brewing, the warmth of the cup between my hands, and the delicate balance of flavors create a sanctuary in which time slows down.\n\n`;

let index = 0;
const speed = 50; 
const typewriter = document.getElementById('typewriter');

function typeWriter() {
    if (index < text.length) {
        typewriter.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

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