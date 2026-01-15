// CLIENT-SIDE ROUTING
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

// FORM VALIDATION
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let successMessage = document.getElementById("successMessage");

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let valid = true;

    // Email validation
    if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    // Password validation
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        valid = false;
    }
    if (!/[A-Z]/.test(password)) {
        passwordError.textContent = "Must contain one uppercase letter";
        valid = false;
    }
    if (!/[0-9]/.test(password)) {
        passwordError.textContent = "Must contain one number";
        valid = false;
    }

    if (valid) {
        successMessage.textContent = "Registration Successful!";
        document.getElementById("registerForm").reset();
    }
});