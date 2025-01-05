import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async () => {

    const provider = new GoogleAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials);
        console.log("Iniciar Sesión en Google");

        // Close the login modal
        const modalInstance = bootstrap.Modal.getInstance(googleButton.closest('#signinModal'));
        modalInstance.hide();

        // show welcome message
        showMessage("Welcome " + credentials.user.displayName);
    } catch (error) {
        console.log(error);
    }
});