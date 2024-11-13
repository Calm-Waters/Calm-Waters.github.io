hub_layout = `
<style>
.hub button {
	flex: 0;
	min-width: 300px;
	margin: 10px;
	max-width: 95%;
	padding: 5px;
}
</style>
<div class="scene hbox hub">
	<div class="vbox centercontainer">
		<div style="top: 50%; flex: 0; max-height: 100vh;">  <!-- usefull pattern -->
			<div class="vscroll">
				<button onclick="loadScene('duel')">Duel</button>
				<button onclick="loadScene('test')">Deck Editor</button>
				<button onclick="loadScene('card_editor')">Card Editor</button>
				<button onclick="loadScene('test')">Replays</button>
				<button onclick="loadScene('test')">Puzzles</button>
				<button onclick="loadScene('login')">Exit</button>
				<button onclick="loadScene('hub')">Reload</button>
				<button onclick="loadScene('notes')">Notes</button>
				<button onclick="loadScene('test')">Profile Editor</button>
			</div>
		</div>
	</div>
	<div class="scene"/>
</div>

`
hub_init = function() {

};
hub_init();