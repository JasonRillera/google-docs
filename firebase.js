import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBsdNIFeIvaSQvw-Tspd60FvGcBR1yc0fc",
    authDomain: "docs-184d1.firebaseapp.com",
    projectId: "docs-184d1",
    storageBucket: "docs-184d1.appspot.com",
    messagingSenderId: "971694896614",
    appId: "1:971694896614:web:d415e6b6d5dc92d1fdd227"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export { db };