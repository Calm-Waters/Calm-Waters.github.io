window.login_mod = `
<style>

</style>
<div class="scene hbox centercontainer login">
	<form id="loginForm">
	    <div class="form-group">
	        <!-- <label for="username">Username:</label> -->
	        <input type="text" id="username" name="username" placeholder="username" required>
	    </div>
	    <div class="form-group">
	        <!-- <label for="password">Password:</label> -->
	        <input type="password" id="password" name="password" placeholder="password" required>
	    </div>
	    <div class="hbox centercontainer">
		    <button type="submit">Log In</button>
		    <button onclick="loadPage('hub')">Skip</button>
		</div>
	</form>
</div>
`;
console.log('testing if this loads properly');
window.hub_init = function() {
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
	                loadPage('login');
	            } catch (error) {
	                console.error('Error logging in:', error.message);
	                alert("Error: " + error.message);  // Display error message to the user
	            }
	        });
	    }
	});
}
