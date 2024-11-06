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

// Registration Function
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    // Password validation
    if (password !== repeatPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        // Create user with email and password
        const userCredential = await auth.createUserWithEmailAndPassword(username, password);
        alert("Registration successful!");
        window.location.href = "index.html";  // Redirect to login page
    } catch (error) {
        alert("Error: " + error.message);
    }
});

// Login Function 
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Sign in the user
        const userCredential = await auth.signInWithEmailAndPassword(username, password);
        alert("Login successful!");
        window.location.href = "hub.html";  // Redirect to the hub page
    } catch (error) {
        alert("Error: " + error.message);
    }
});
