// Firebase configuration from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyA3k7RiiqOTWRyNgFdw4Z2-c1Cm106OdLo",
    authDomain: "custom-nexus.firebaseapp.com",
    projectId: "custom-nexus",
    storageBucket: "custom-nexus.firebasestorage.app",
    messagingSenderId: "469054983781",
    appId: "1:469054983781:web:ac4f0bc7681074b6edc08c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

