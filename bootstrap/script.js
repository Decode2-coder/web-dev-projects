// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const message = document.getElementById("message");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Username and password length check
        if (username.length < 4 || username.length > 8 || password.length < 4 || password.length > 8) {
            message.innerText = "Both username and password must be 4-8 characters long.";
            return;
        }

        // Username alphanumeric check
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        if (!alphanumericRegex.test(username)) {
            message.innerText = "Username must be composed of only alphanumeric characters.";
            return;
        }

        // Password constraints check
        const passwordRegex = /^[a-zA-Z0-9][a-zA-Z0-9-_]+$/;
        if (!passwordRegex.test(password)) {
            message.innerText = "Password must start with an alphanumeric character and may contain underscores and hyphens.";
            return;
        }

        // If all validations pass, display success message
        message.innerText = "Form is submitted successfully!";
    });
});
