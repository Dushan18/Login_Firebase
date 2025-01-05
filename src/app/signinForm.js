import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector('#login-form');

if (signInForm) {
    signInForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = signInForm['login-email'].value.trim();
        const password = signInForm['login-password'].value.trim();

        try {
            const credentials = await signInWithEmailAndPassword(auth, email, password);
            console.log('Usuario autenticado:', credentials);

            const modal = bootstrap.Modal.getInstance(signinModal)
            modal.hide()

            // Mensaje de éxito
            showMessage("Inicio de sesión exitoso", "success");

        } catch (error) {
            console.error('Error al iniciar sesión:', error);

            // Manejo de errores específicos
            switch (error.code) {
                case "auth/invalid-credential":
                    showMessage("Credenciales inválidas", "error");
                    break;
                default:
                    showMessage("Error desconocido: " + error.message, "error");
            }
        }
    });
} else {
    console.error('Formulario #login-form no encontrado');
}
