window.duel_mod = `
<style>
	.card-cell {
		flex: 1;
		border: 1px solid black;
	}
</style>
<div class="scene duel">
	<button onclick="loadPage('hub')">Return to HUB</button>
	<button onclick="loadPage('duel')">Reload</button>
	<div class="hbox">
		<div class="scene vbox">
			Card Details
		</div>

		<div class="scene vbox" style="width: 100vh;">
			<div class="scene hbox">P2_HA</div>

			<div class="scene hbox playarea" style="height: calc(5 / 7 * 98vh);">
				<div class="scene vbox" style="min-width: calc(1 / 7 * vh);">
					<div class="card-cell">P2_DE</div>
					<div class="card-cell">P2_GY</div>
					<div class="card-cell">P2_BA</div>
					<div class="card-cell">P1_FZ</div>
					<div class="card-cell">P1_ED</div>
				</div>
				<div class="scene vbox" style="min-width: calc(5 / 7 * 98vh);">
					<div class="scene hbox">
						<div class="card-cell">P2_S1</div>
						<div class="card-cell">P2_S2</div>
						<div class="card-cell">P2_S3</div>
						<div class="card-cell">P2_S4</div>
						<div class="card-cell">P2_S5</div>
					</div>
					<div class="scene hbox">
						<div class="card-cell">P2_M1</div>
						<div class="card-cell">P2_M2</div>
						<div class="card-cell">P2_M3</div>
						<div class="card-cell">P2_M4</div>
						<div class="card-cell">P2_M5</div>
					</div>
					<div class="scene hbox">
						<div class="card-cell"></div>
						<div class="card-cell">P0_E2</div>
						<div class="card-cell"></div>
						<div class="card-cell">P0_E4</div>
						<div class="card-cell"></div>
					</div>
					<div class="scene hbox">
						<div class="card-cell">P1_M1</div>
						<div class="card-cell">P1_M2</div>
						<div class="card-cell">P1_M3</div>
						<div class="card-cell">P1_M4</div>
						<div class="card-cell">P1_M5</div>
					</div>
					<div class="scene hbox">
						<div class="card-cell">P1_S1</div>
						<div class="card-cell">P1_S2</div>
						<div class="card-cell">P1_S3</div>
						<div class="card-cell">P1_S4</div>
						<div class="card-cell">P1_S5</div>
					</div>
				</div>
				<div class="scene vbox" style="min-width: calc(1 / 7 * vh);">
					<div class="card-cell">P2_ED</div>
					<div class="card-cell">P2_FZ</div>
					<div class="card-cell">P1_BA</div>
					<div class="card-cell">P1_GY</div>
					<div class="card-cell">P1_DE</div>
				</div>
			</div>

			<div class="scene hbox">P1_HA</div>
		</div>

		<div class="scene vbox">
			Chat / Card selection / Other (opponent's LP)
		</div>
	</div>
</div>
`;
// Define an initialization function for additional JavaScript logic
document.querySelectorAll('.card-cell').forEach(cell => {
cell.addEventListener('mouseenter', () => {
    cell.textContent = 'Seen.';
});
cell.addEventListener('mouseleave', () => {
    cell.textContent = ''; // Reset text on hover out
});
});
