document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.userId === username && user.password === password);
            if (user) {
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
});