// 1. Manejo del Splash Screen al cargar la página
window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    const login = document.getElementById('login-screen');

    setTimeout(() => {
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
                if (login) {
                    login.style.display = 'flex'; // Muestra el login tras el splash
                }
            }, 800);
        }
    }, 2000); // 2 segundos de Splash
});

// 2. Control de Modo (Login vs Registro)
let isRegisterMode = false;

function toggleAuthMode() {
    isRegisterMode = !isRegisterMode;
    
    const title = document.getElementById('auth-title');
    const btn = document.getElementById('auth-btn');
    const toggleText = document.getElementById('toggle-text');
    const nameGroup = document.getElementById('name-group');

    if (isRegisterMode) {
        title.innerText = "Crear Cuenta";
        btn.innerText = "Registrarme en Swaply";
        nameGroup.style.display = "block";
        toggleText.innerHTML = '¿Ya tienes cuenta? <a href="javascript:void(0)" onclick="toggleAuthMode()" style="color: var(--accent-blue); font-weight: bold; text-decoration: none;">Inicia Sesión</a>';
    } else {
        title.innerText = "Iniciar Sesión";
        btn.innerText = "Entrar a Swaply";
        nameGroup.style.display = "none";
        toggleText.innerHTML = '¿No tienes cuenta? <a href="javascript:void(0)" onclick="toggleAuthMode()" style="color: var(--accent-blue); font-weight: bold; text-decoration: none;">Regístrate</a>';
    }
}

// 3. Función Principal de Autenticación
function handleAuth() {
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('pass');
    const nameInput = document.getElementById('reg-name');
    
    const email = emailInput.value.trim();
    const pass = passInput.value;
    const name = nameInput.value.trim();

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

    // Si estamos en modo registro, validamos el nombre
    if (isRegisterMode && name === "") {
        alert("Por favor, dinos tu nombre para registrarte.");
        nameInput.style.borderColor = "red";
        return;
    }

    // Limpiamos bordes si todo está bien
    emailInput.style.borderColor = "#ddd";
    passInput.style.borderColor = "#ddd";

    // Simulación de éxito: Si es registro usamos el nombre, si es login el email
    const usuarioAMostrar = isRegisterMode ? name : email;
    irAMain(usuarioAMostrar);
}

// 4. Transición a la Interfaz Principal
function irAMain(identificador) {
    const login = document.getElementById('login-screen');
    const main = document.getElementById('main-content');
    const display = document.getElementById('user-display');

    login.style.opacity = '0';
    
    setTimeout(() => {
        login.style.display = 'none';
        main.style.display = 'block';
        
        setTimeout(() => {
            main.style.opacity = '1';
            if (display) display.innerText = `Hola, ${identificador}`;
        }, 50);
    }, 500);
}
