import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAa5pGlOpSmDabD9yqZrV2M7J-fLIRNt4U",
    authDomain: "elibrary-2a785.firebaseapp.com",
    projectId: "elibrary-2a785",
    storageBucket: "elibrary-2a785.appspot.com",
    messagingSenderId: "333013803158",
    appId: "1:333013803158:web:ac82bb2fa0f53e302062b7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();