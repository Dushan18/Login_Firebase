import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const githubButton = document.querySelector("#githubLogin");

githubButton.addEventListener("click", async () => {

    const provider = new GithubAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials);
        console.log("Iniciar Sesión en Github");

        // Close the login modal
        const modalInstance = bootstrap.Modal.getInstance(githubButton.closest('#signinModal'));
        modalInstance.hide();

        // show welcome message
        showMessage("Bienvenido " + credentials.user.displayName);
    } catch (error) {
        console.log(error);
    }
});