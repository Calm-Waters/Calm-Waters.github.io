window.login_layout = `
<style>

</style>
<div class="scene hbox centercontainer login">
	<form id="loginForm" onsubmit="login(event)">
		<div class="form-group">
			<input type="text" id="email" name="email" placeholder="email" required>
		</div>
		<div class="form-group">
			<input type="password" id="password" name="password" placeholder="password" required>
		</div>
		<div class="hbox centercontainer">
			<button type="submit">Log In</button>
			<button onclick="loadPage('hub')">Skip</button>
		</div>
	</form>
</div>
`;
const savedEmail = localStorage.getItem("email");
const savedPassword = localStorage.getItem("password");
if (savedEmail) { document.getElementById("email").value = savedEmail;}
if (savedPassword) { document.getElementById("password").value = savedPassword;}
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
const auth = getAuth();
document.getElementById("loginForm").addEventListener("submit", function(event) {
	event.preventDefault();
	console.log('hey');
	return;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	if (!email || !password) {
		alert("Please fill in both fields.");
		return;
	}
	try {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;		
				localStorage.setItem("email", email);
				localStorage.setItem("password", password);
				loadPage('hub');
			})
				.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}	catch (error) {
	console.error('Error logging in:', error.message);
		alert("Error: " + error.message);  // Display error message to the user
	}
}
