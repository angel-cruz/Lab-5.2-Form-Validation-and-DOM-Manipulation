
const form = document.getElementById("registrationForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const successMessage = document.getElementById("successMessage");


const savedUsername = localStorage.getItem("username");

if (savedUsername) {
    username.value = savedUsername;
}


function validateUsername() {
    usernameError.textContent = "";

    if (username.validity.valueMissing) {
        usernameError.textContent = "Username is required.";
        username.classList.add("invalid");
        return false;
    }

    if (username.validity.tooShort) {
        usernameError.textContent = "Username must be at least 3 characters long.";
        username.classList.add("invalid");
        return false;
    }

    if (username.validity.patternMismatch) {
        usernameError.textContent =
            "Username can only contain letters, numbers, and underscores.";
        username.classList.add("invalid");
        return false;
    }

    username.classList.remove("invalid");
    username.classList.add("valid");

    return true;
}


function validateEmail() {
    emailError.textContent = "";

    if (email.validity.valueMissing) {
        emailError.textContent = "Email is required.";
        email.classList.add("invalid");
        return false;
    }

    if (email.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email address.";
        email.classList.add("invalid");
        return false;
    }

    email.classList.remove("invalid");
    email.classList.add("valid");

    return true;
}


function validatePassword() {
    passwordError.textContent = "";

    if (password.validity.valueMissing) {
        passwordError.textContent = "Password is required.";
        password.classList.add("invalid");
        return false;
    }

    if (password.validity.tooShort) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        password.classList.add("invalid");
        return false;
    }

    if (password.validity.patternMismatch) {
        passwordError.textContent =
            "Password must include an uppercase letter, lowercase letter, and number.";
        password.classList.add("invalid");
        return false;
    }

    password.classList.remove("invalid");
    password.classList.add("valid");

    return true;
}


function validateConfirmPassword() {
    confirmPasswordError.textContent = "";

    if (confirmPassword.validity.valueMissing) {
        confirmPasswordError.textContent = "Please confirm your password.";
        confirmPassword.classList.add("invalid");
        return false;
    }

    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPassword.classList.add("invalid");
        return false;
    }

    confirmPassword.classList.remove("invalid");
    confirmPassword.classList.add("valid");

    return true;
}


username.addEventListener("input", validateUsername);

email.addEventListener("input", validateEmail);

password.addEventListener("input", function () {
    validatePassword();

    
    if (confirmPassword.value !== "") {
        validateConfirmPassword();
    }
});

confirmPassword.addEventListener("input", validateConfirmPassword);


form.addEventListener("submit", function (event) {
    event.preventDefault();

    
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    const isFormValid =
        isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    if (isFormValid) {
        
        localStorage.setItem("username", username.value.trim());

        
        successMessage.textContent = "Registration successful!";

        
        form.reset();

        
        const inputs = [username, email, password, confirmPassword];

        inputs.forEach(function (input) {
            input.classList.remove("valid", "invalid");
        });

    } else {
        successMessage.textContent = "";
        console.log("Please correct the errors before submitting.");
    }
});
