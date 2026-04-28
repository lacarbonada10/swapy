// Esperar a que la ventana cargue totalmente
window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const login = document.getElementById('login-screen');

        if(splash) {
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
                if(login) login.style.display = 'flex';
            }, 800);
        }
    }, 2000); // 2 segundos de splash
});

// Función de validación y entrada
function handleLogin() {
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('pass');
    
    const emailValue = emailInput.value;
    const passValue = passInput.value;

    // Validación profesional con Regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        emailInput.style.borderColor = "#ff4b2b";
        return;
    }

    if (passValue.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        passInput.style.borderColor = "#ff4b2b";
        return;
    }

    // Si todo es correcto, pasamos a la interfaz principal
    entrarALaApp(emailValue);
}

function entrarALaApp(email) {
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');
    const userDisplay = document.getElementById('user-display');

    loginScreen.style.opacity = '0';
    setTimeout(() => {
        loginScreen.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = '1';
            if(userDisplay) userDisplay.innerText = email;
        }, 50);
    }, 500);
}
