// Firebase configuration (replace with your actual config)
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

// Reference to elements
const statusMessage = document.getElementById('statusMessage');
const logoutButton = document.getElementById('logoutButton');

// Check if the user is logged in
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is logged in
        statusMessage.textContent = `Logged in successfully! Welcome, ${user.displayName || user.email}`;
    } else {
        // No user is logged in, redirect to login page
        statusMessage.textContent = 'You are not logged in. Redirecting to login page...';
        setTimeout(() => {
            window.location.href = "login.html"; // Redirect to login page
        }, 2000); // Delay for 2 seconds
    }
});

// Logout functionality
logoutButton.addEventListener('click', async function() {
    try {
        // Log out the user from Firebase
        await firebase.auth().signOut();
        // Redirect to login page after logout
        window.location.href = "index.html";
    } catch (error) {
        console.error("Error logging out: ", error);
        statusMessage.textContent = `Error logging out: ${error.message}`;
    }
});
