notes_layout = `
<div class="scene hbox">
	<div class="vbox">
		<div class="hbox" style="flex: 0;">
			<button onclick="loadScene('login')">Return to Login</button>
			<button onclick="loadScene('notes')">Reload</button>
			<button onclick="loadScene('hub')">Return to Hub</button>
		</div>
		<div style="white-space: pre-line;">
			<h2>To-Do:</h2>
			1. Set up the HUB again.
			2. Create a Card Editor.
				- Leave effect text empty for now, you just need the cards as placeholders for non-automated testing later.
		</div>
	</div>
</div>
`
notes_init = function() {

};
notes_init();