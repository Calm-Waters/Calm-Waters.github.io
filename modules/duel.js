const moduleName = "duel";
window[moduleName + '_layout'] = `
<style>
	.card-cell {
		flex: 1;
		border: 1px solid black;
	}
</style>
<button onclick="loadPage('hub')">Return to HUB</button>
<button onclick="loadPage('duel')">Reload</button>
<div class="scene hbox centercontainer login">
	<div class="scene hbox"></div>
	<!-- play area -->
	<div class="scene vbox" style="flex: 0; aspect-ratio: 1 / 1; max-width: calc(5 / 7 * 100vw); max-height: calc(5 / 7 * 100vw);">
		<div class=" hbox hand"></div>
		<div class="hbox field" style="flex: 5;">
			<div class="vbox">
				<div class="card-cell"></div>
				<div class="card-cell"></div>
				<div class="card-cell"></div>
				<div class="card-cell"></div>
				<div class="card-cell"></div>
			</div>
			<div class="vbox" style="flex: 5;">
				<div class="hbox">
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
				</div>
				<div class="hbox">
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
				</div>
				<div class="hbox">
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
				</div>
				<div class="hbox">
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
				</div>
				<div class="hbox">
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
					<div class="card-cell"></div>
				</div>
			</div>
			<div class="vbox"">
				<div class="card-cell"></div>
				<div class="card-cell"></div>
				<div class="card-cell"></div>
				<div class="card-cell"></div>
				<div class="card-cell"></div>
			</div>
		</div>
		<div class=" hbox hand"></div>
	</div>
	<div class="scene hbox"></div>
</div>
`;
window[moduleName + '_init'] = function() {
	document.querySelectorAll('.card-cell').forEach(cell => {
		cell.addEventListener('mouseenter', () => {
			cell.textContent = 'Seen.';
		});
		cell.addEventListener('mouseleave', () => {
			cell.textContent = ''; // Reset text on hover out
		});
	});
}
