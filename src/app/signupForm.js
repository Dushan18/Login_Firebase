import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { auth } from "./firebase.js";
import {showMessage} from "./showMessage.js"

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value.trim();
    const password = signupForm['signup-password'].value.trim();

    console.log(email, password)

    try {
        // Crear un usuario con correo y contraseña
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Usuario registrado:', userCredentials);

        //Cerrar el modal
        const sigupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(sigupModal)
        modal.hide()

        showMessage("Bienvenido " + userCredentials.user.email)
        

    } catch (error) {
        if (error.code === 'auth/email-already-in use') {
            showMessage("Correo en uso " , "error")
        }
        else if (error.code === 'auth/invalid-email') {
            showMessage("Correo Invalido " , "error")
        }
        else if (error.code === 'auth/weak-password') {
            showMessage("Contraseña Debil " , "error")
        }
        else if (error.code) {
            showMessage("Algo salió mal " , "error")
        }

    }
});
