login_layout = `
<div class="scene hbox centercontainer">
	<div class="vbox" style="max-width: 400px">
		<div class="hbox">
			<input type="text" />
			<input type="text" />
		</div>
		<div class="hbox">
			<button onclick="loadScene('hub')">Login</button>
			<button onclick="loadScene('login')">Reload</button>
			<button onclick="loadScene('notes')">View Notes</button>
		</div>
	</div>
</div>
`
login_init = function() {

};
login_init();
//code below this is run once, upon loading the scene for the FIRST time
