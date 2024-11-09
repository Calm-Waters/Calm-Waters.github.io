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
   			<button onclick="greetUser('Bob');">Test</button>
		</div>
	</form>
</div>
`;
function greetUser(name) {
	console.log(`Hello, ${name}!`);
}
greetUser('Alice');
