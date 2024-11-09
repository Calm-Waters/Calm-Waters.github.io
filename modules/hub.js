window.hub_mod = `
<style>

</style>
<div class="scene hbox hub">
	<div class="vbox centercontainer">
		<div class="vscroll">
			<button onclick="loadPage('duel')">Duel</button>
			<button onclick="loadPage('test')">Deck Editor</button>
			<button onclick="loadPage('test')">Card Editor</button>
			<button onclick="loadPage('test')">Replays</button>
			<button onclick="loadPage('test')">Puzzles</button>
		    <button onclick="loadPage('login')">Exit</button>
		    <button onclick="loadPage('test')">Edit Profile</button>
		</div>
	</div>
</div>
`;
console.log('this should execute on module load');
