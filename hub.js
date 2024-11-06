// Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyA3k7RiiqOTWRyNgFdw4Z2-c1Cm106OdLo",
    authDomain: "custom-nexus.firebaseapp.com",
    projectId: "custom-nexus",
    storageBucket: "custom-nexus.firebasestorage.app",
    messagingSenderId: "469054983781",
    appId: "1:469054983781:web:ac4f0bc7681074b6edc08c"
};

// Initialize Firebase (make sure this is done before using Firebase features)
firebase.initializeApp(firebaseConfig);

// This function will be triggered on authentication state change
firebase.auth().onAuthStateChanged(function(user) {
    const statusMessage = document.getElementById('statusMessage');

    if (user) {
        // If the user is logged in, show a success message and proceed
        statusMessage.textContent = 'Logged in successfully!';
        document.body.innerHTML += `<p>Welcome, ${user.email}!</p>`;
        // You can redirect the user to another part of your app if needed
        // window.location.href = "another-page.html";
    } else {
        // If the user is not logged in, redirect them to the login page
        statusMessage.textContent = 'You are not logged in. Redirecting to login...';
        setTimeout(() => {
            window.location.href = "login.html"; // Redirect to the login page
        }, 2000); // 2 seconds delay
    }
});
