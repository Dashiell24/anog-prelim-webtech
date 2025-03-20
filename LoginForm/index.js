// Declare static username and password, other variables
const validUsername = "user";
const validPassword = "user123";
let attempts = 0;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value; // Get username from form
    const password = document.getElementById('password').value; // Get password from form
    const message = document.getElementById('message');
    
    const loginForm = document.getElementById('loginForm');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const incorrectMessage = document.getElementById('IncorrectMessage');

    // Logic here

    // Display welcome message
    if (username === validUsername && password === validPassword) {
        loginForm.style.display = "none"; 
        welcomeMessage.classList.remove("hidden"); 
    } else {
        attempts++;
        alert("Incorrect log-in attempts: " + attempts);

        // Incorrect message
        if (attempts >= 3) {
            loginForm.style.display = "none"; 
            incorrectMessage.classList.remove("hidden");
        } else {
        }
    }
});