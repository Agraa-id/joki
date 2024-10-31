// Register User
function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful!');
    window.location.href = 'login.html'; // Redirect to login page
}

// Login User
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to homepage
    } else {
        alert('Invalid email or password.');
    }
}
