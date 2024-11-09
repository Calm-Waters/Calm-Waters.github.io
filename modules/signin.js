const moduleName = "signin";
window[moduleName + '_layout'] = `
<div class="scene hbox centercontainer signin">
	<form id="signinForm" onsubmit="signin(event)">
		<div class="form-group">
			<input type="text" id="email" name="email" placeholder="email" required>
		</div>
		<div class="form-group">
			<input type="password" id="password" name="password" placeholder="password" required>
		</div>
  		<div class="form-group">
			<input type="password" id="repeat-password" name="repeat password" placeholder="repeat password" required>
		</div>
		<div class="hbox centercontainer">
			<button type="submit">Register</button>
			<button onclick="loadPage('login')">Return to Login</button>
		</div>
	</form>
</div>
`;
