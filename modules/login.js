const moduleName = "login";
window[moduleName + '_layout'] = `
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
window.login = function(event) {
	event.preventDefault();
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	if (!email || !password) {
		alert("Please fill in both fields.");
		return;
	}
}
