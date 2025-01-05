
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiywcuyOxXlm5t9hFza7taboOK2j3PxSg",
    authDomain: "loginproyecto-72608.firebaseapp.com",
    projectId: "loginproyecto-72608",
    storageBucket: "loginproyecto-72608.firebasestorage.app",
    messagingSenderId: "280023593631",
    appId: "1:280023593631:web:ca6e913f92f5351ca2a8aa",
    measurementId: "G-TMF5RB7DVL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
const analytics = getAnalytics(app);
