let currentCaptcha = "";

function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    currentCaptcha = captcha;
    document.getElementById("captchaText").textContent = captcha;
    document.getElementById("captchaInput").value = "";
    document.getElementById("message").textContent = "";
}

function validateLogin() {
    const enteredCaptcha = document.getElementById("captchaInput").value;
    if (enteredCaptcha === currentCaptcha) {
        document.getElementById("message").textContent = "Login successful!";
        document.getElementById("message").style.color = "green";
        return false; // Prevent actual form submission for demo
    } else {
        document.getElementById("message").textContent = "Incorrect CAPTCHA. Try again.";
        document.getElementById("message").style.color = "red";
        generateCaptcha(); // Reset CAPTCHA
        return false; // Prevent form submission
    }
}