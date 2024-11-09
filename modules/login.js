const moduleName = "login";
window[moduleName + '_layout'] = `
<div class="scene hbox centercontainer login">
	<form id="loginForm" onsubmit="printMessage()">
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
window.printMessage = function() {
    console.log('Hello from the Example Module!');
}
