import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwcap_PWjh219ZsOtHF1VsKkCNRnYeSJw",
    authDomain: "shineblind-aab31.firebaseapp.com",
    projectId: "shineblind-aab31",
    storageBucket: "shineblind-aab31.appspot.com",
    messagingSenderId: "181773639025",
    appId: "1:181773639025:web:cda8074119a9b25a63aad0",
    measurementId: "G-E363RE09XL"
};

export default firebase.initializeApp(firebaseConfig);

export const authService = getAuth();