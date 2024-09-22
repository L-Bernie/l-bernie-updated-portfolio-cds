document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById("dynamic-text");
    const words = ["passion", "purpose", "creativity"];
    let currentIndex = 0;

    function changeText() {
        const currentWord = words[currentIndex];
        currentIndex = (currentIndex + 1) % words.length;

        // Clear existing letters
        dynamicText.innerHTML = '';

        // Create and animate each letter
        currentWord.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.display = 'inline-block'; // Allow vertical movement
            span.classList.add('fall-down'); // Use the fall-down class
            span.style.animationDelay = `${index * 100}ms`; // Delay for each letter
            dynamicText.appendChild(span);
        });
    }

    setTimeout(() => {
        changeText(); // Initial change
        setInterval(changeText, 3000); // Change text every 3 seconds
    }, 2000); // Wait for 2 seconds before starting the text change
});
