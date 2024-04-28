const messages = [
    "Hello, world!",
    "Coding is fun!",
    "Keep calm and code on.",
    "Learn to embrace the unexpected.",
    "Stay curious, stay hungry.",
    "The best way to predict the future is to create it."
];

function generateRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
}

document.getElementById('generate-btn').addEventListener('click', generateRandomMessage);
