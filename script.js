let registeredUser = {};

function showRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function register() {
    const username = document.getElementById('regUsername').value;
    const password1 = document.getElementById('regPassword1').value;
    const password2 = document.getElementById('regPassword2').value;

    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!usernameRegex.test(username)) {
        alert('Username must be 3-20 characters long and can contain letters and numbers only.');
        return;
    }

    if (!passwordRegex.test(password1)) {
        alert('Password must be 6-20 characters long, contain at least one numeric digit, one uppercase, and one lowercase letter.');
        return;
    }

    if (password1 !== password2) {
        alert('Passwords do not match.');
        return;
    }

    registeredUser = { username, password: password1 };
    alert('Registration successful! You can now log in.');
    showLoginForm();
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === registeredUser.username && password === registeredUser.password) {
        window.location.href = 'second.html';
    } else {
        alert('Invalid username or password.');
    }
}