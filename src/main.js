import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import { setupPreguntas } from './app/preguntas.js'
import { setupPreguntas2 } from './app/stakeholders.js'
import { setupPreguntas3 } from './app/processes.js'
import { setupPreguntas4 } from './app/information.js'
import { setupPreguntas5 } from './app/improvement.js'
import { setupPreguntas6 } from './app/participation.js'
import { setupPreguntas7 } from './app/institution.js'

import './app/signupForm.js';
import './app/signinForm.js';
import './app/googleLogin.js';
import './app/facebookLogin.js';
import './app/githubLogin.js';
import './app/logout.js';
import './app/preguntas.js';

onAuthStateChanged(auth, async (user) => {
    loginCheck(user);
    const userNameElement = document.querySelector("#username");
    const fotoNameElement = document.querySelector("#userfoto");

    if (user) {
        try {

            if (user.displayName && user.photoURL ) {
                userNameElement.textContent = user.displayName;
                fotoNameElement.src = user.photoURL;
            }
            // CRS
            const querySnapshot = await getDocs(collection(db, 'Preguntas'));
            setupPreguntas(querySnapshot.docs)

            // Consultar la colección 'Usuarios'
            const querySnapshot2 = await getDocs(collection(db, 'STAKEHOLDERS'));
            setupPreguntas2(querySnapshot2.docs);

            // Consultar la colección 'Usuarios'
            const querySnapshot3 = await getDocs(collection(db, 'processes'));
            setupPreguntas3(querySnapshot3.docs);

            // Consultar la colección 'Usuarios'
            const querySnapshot4 = await getDocs(collection(db, 'information'));
            setupPreguntas4(querySnapshot4.docs);

            // Consultar la colección 'Usuarios'
            const querySnapshot5 = await getDocs(collection(db, 'improvement'));
            setupPreguntas5(querySnapshot5.docs);

            // Consultar la colección 'Usuarios'
            const querySnapshot6 = await getDocs(collection(db, 'participation'));
            setupPreguntas6(querySnapshot6.docs);

            // Consultar la colección 'Usuarios'
            const querySnapshot7 = await getDocs(collection(db, 'institution'));
            setupPreguntas7(querySnapshot7.docs);

        } catch (error) {
            console.error("Error obteniendo documentos:", error);
        }
    } else {
        setupPreguntas([])
        console.log("Usuario no autenticado.");
        

    }
});
