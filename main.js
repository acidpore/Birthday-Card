// Create background hearts
function createBackgroundHearts() {
    const container = document.querySelector('.bg-hearts');
    const symbols = ['❤️', '💖', '💝', '💕', '💗'];
    const numberOfHearts = 20;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'bg-heart';
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Random starting position
        const startPos = Math.random() * 100;
        heart.style.left = `${startPos}%`;
        
        // Random animation duration between 10 and 20 seconds
        const duration = 10 + Math.random() * 10;
        heart.style.animationDuration = `${duration}s`;
        
        // Random horizontal movement
        const translateX = -50 + Math.random() * 100;
        heart.style.setProperty('--translate-x', `${translateX}%`);
        
        // Random delay
        heart.style.animationDelay = `${Math.random() * duration}s`;
        
        container.appendChild(heart);
    }
}

// Initialize background hearts
createBackgroundHearts();

// Recreate background hearts periodically
setInterval(createBackgroundHearts, 20000);

// Envelope click handler
document.querySelector('.envelope').addEventListener('click', function() {
    this.classList.toggle('open');
    if (this.classList.contains('open')) {
        createFloatingHearts();
    }
});

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    container.innerHTML = '';
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 4000);
        }, i * 300);
    }
}

document.getElementById('photo-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('photo').src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});