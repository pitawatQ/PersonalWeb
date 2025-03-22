// scripts.js

// ตรวจสอบการเข้าสู่ระบบ
function checkLogin() {
    const token = localStorage.getItem('authToken');
    if (token) {
        // ถ้ามี Token ให้ไปที่หน้า index.html
        window.location.href = 'index.html';
    }
}

// เรียกใช้เมื่อเข้าสู่หน้า login.html
if (window.location.pathname === '/login.html' || window.location.pathname === '/') {
    checkLogin();
}

// ล็อกอิน
document.getElementById('loginForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Login successful');
            localStorage.setItem('authToken', data.token);
            window.location.href = 'index.html';
        } else {
            alert(data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
