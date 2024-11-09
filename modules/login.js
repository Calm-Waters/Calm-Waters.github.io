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
   			<button onclick="tesfunct()">Test</button>
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
function testfunct(){
	console.log('here's hoping this works');
}
