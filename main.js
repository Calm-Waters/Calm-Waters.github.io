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
firebase.initializeApp(firebaseConfig);

// Check if the login page is loaded and initialize the login logic
if (window.location.pathname.includes("login.html")) {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const userCredential = await firebase.auth().signInWithEmailAndPassword(username, password);
                alert("Login successful!");
                window.location.href = "hub.html";  // Redirect to hub page
            } catch (error) {
                alert("Error: " + error.message);
            }
        });
    } else {
        console.log("Login form not found");
    }
}

// Check if the registration page is loaded and initialize the registration logic
if (window.location.pathname.includes("register.html")) {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;
            const passwordConfirm = document.getElementById('repeatPassword').value;

            // Check if passwords match
            if (password !== passwordConfirm) {
                alert("Passwords do not match");
                return;
            }

            try {
                const userCredential = await firebase.auth().createUserWithEmailAndPassword(username, password);
                alert("Registration successful!");
                window.location.href = "hub.html";  // Redirect to hub page
            } catch (error) {
                alert("Error: " + error.message);
            }
        });
    } else {
        console.log("Register form not found");
    }
}
