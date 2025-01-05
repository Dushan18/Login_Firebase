import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const facebookButton = document.querySelector("#facebookLogin");

facebookButton.addEventListener("click", async () => {

    const provider = new FacebookAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials);
        console.log("Iniciar Sesión en Facebook");

        // Close the login modal
        const modalInstance = bootstrap.Modal.getInstance(facebookButton.closest('#signinModal'));
        modalInstance.hide();

        // show welcome message
        showMessage("Bienvenido " + credentials.user.displayName);
    } catch (error) {
        console.log(error);
    }
});