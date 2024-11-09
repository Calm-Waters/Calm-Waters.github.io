window.login_mod = `
<style>

</style>
<div class="scene hbox centercontainer login">
	<form id="loginForm">
		<div class="form-group">
			<input type="text" id="username" name="username" placeholder="username" required>
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
