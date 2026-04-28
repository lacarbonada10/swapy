// 1. Manejo del Splash Screen
window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    const login = document.getElementById('login-screen');

    setTimeout(() => {
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
                if (login) login.style.display = 'flex';
            }, 800);
        }
    }, 2000); // 2 segundos de Splash
});

// 2. Lógica de Login
function handleLogin() {
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('pass');
    const email = emailInput.value.trim();
    const pass = passInput.value;

    // Validación de formato de correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        emailInput.style.borderColor = "red";
        return;
    }

    if (pass.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        passInput.style.borderColor = "red";
        return;
    }

    // Si todo está bien, entramos
    irAMain(email);
}

// 3. Transición a la App Principal
function irAMain(userEmail) {
    const login = document.getElementById('login-screen');
    const main = document.getElementById('main-content');
    const display = document.getElementById('user-display');

    login.style.display = 'none';
    main.style.display = 'block';
    
    setTimeout(() => {
        main.style.opacity = '1';
        if (display) display.innerText = userEmail;
    }, 50);
}
