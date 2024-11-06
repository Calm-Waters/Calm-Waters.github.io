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

// Login
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();  // Prevent default form submission behavior
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // Check if the fields are not empty
            if (!username || !password) {
                alert("Please fill in both fields.");
                return;
            }
            // Try to log in with Firebase
            try {
                const userCredential = await firebase.auth().signInWithEmailAndPassword(username, password);
                console.log('Login successful:', userCredential.user);
                // Redirect to the "hub" page or any other page
                window.location.href = "hub.html";  // Adjust based on your actual page
            } catch (error) {
                console.error('Error logging in:', error.message);
                alert("Error: " + error.message);  // Display error message to the user
            }
        });
    }
});

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
