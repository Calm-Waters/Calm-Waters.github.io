duel_layout = `
<style>
	.card-cell {
		flex: 1;
		border: 1px solid black;
	}
</style>
<div class="scene hbox centercontainer login">
	<div class="scene hbox">
		<button onclick="loadScene('hub')">Return to HUB</button>
		<button onclick="loadScene('duel')">Reload</button>
	</div>
	<!-- play area -->
	<div class="scene vbox" style="flex: 0; aspect-ratio: 1 / 1; max-width: calc(5 / 7 * 100vw); max-height: calc(5 / 7 * 100vw);">
		<div class=" hbox hand"></div>
		<div class="hbox field" style="flex: 5;">
			<div class="vbox">
				<div class="card-cell" id="p2_DE"></div>
				<div class="card-cell" id="p2_GY"></div>
				<div class="card-cell" id="p2_BA"></div>
				<div class="card-cell" id="p1_FZ"></div>
				<div class="card-cell" id="p1_ED"></div>
			</div>
			<div class="vbox" style="flex: 5;">
				<div class="hbox">
					<div class="card-cell" id="p2_S1"></div>
					<div class="card-cell" id="p2_S2"></div>
					<div class="card-cell" id="p2_S3"></div>
					<div class="card-cell" id="p2_S4"></div>
					<div class="card-cell" id="p2_S5"></div>
				</div>
				<div class="hbox">
					<div class="card-cell" id="p2_M1"></div>
					<div class="card-cell" id="p2_M2"></div>
					<div class="card-cell" id="p2_M3"></div>
					<div class="card-cell" id="p2_M4"></div>
					<div class="card-cell" id="p2_M5"></div>
				</div>
				<div class="hbox">
					<div class="card-cell" id="p0_V1"></div>
					<div class="card-cell" id="p0_E1"></div>
					<div class="card-cell" id="p0_V3"></div>
					<div class="card-cell" id="p0_E4"></div>
					<div class="card-cell" id="p0_V5"></div>
				</div>
				<div class="hbox">
					<div class="card-cell" id="p1_M1"></div>
					<div class="card-cell" id="p1_M2"></div>
					<div class="card-cell" id="p1_M3"></div>
					<div class="card-cell" id="p1_M4"></div>
					<div class="card-cell" id="p1_M5"></div>
				</div>
				<div class="hbox">
					<div class="card-cell" id="p1_S1"></div>
					<div class="card-cell" id="p1_S2"></div>
					<div class="card-cell" id="p1_S3"></div>
					<div class="card-cell" id="p1_S4"></div>
					<div class="card-cell" id="p1_S5"></div>
				</div>
			</div>
			<div class="vbox"">
				<div class="card-cell" id="p2_ED"></div>
				<div class="card-cell" id="p2_FZ"></div>
				<div class="card-cell" id="p1_BA"></div>
				<div class="card-cell" id="p1_GY"></div>
				<div class="card-cell" id="p1_DE"></div>
			</div>
		</div>
		<div class=" hbox hand"></div>
	</div>
	<div class="scene hbox"></div>
</div>
`

//decks are an array of integers, with each integer uniquely identifying a specific card's template. 
//p1 is always you, as far as code is concerned

p1 = {};
p1.deck_main = [];
p1.deck_xtra = [];
p1.deck_side = [];

function createCard(parentId) {
	const parent = document.getElementById(parentId);
	if (!parent) {
		console.error('Parent element not found!');
		return;
	}
	const newCard = document.createElement('div');
	newCard.style.width = '62%'; // 62% of the parent's width
	newCard.style.height = '96%'; // 96% of the parent's height
	newCard.style.backgroundColor = 'black'; // Black background color
	newCard.style.border = '1px solid red'; // 1px red border
	parent.appendChild(newCard);
}

duel_init = function() {
	console.log("hey");
	document.querySelectorAll('.card-cell').forEach(cell => {
		cell.addEventListener('mouseenter', () => {
			//cell.textContent = 'Seen.';
			cell.textContent = cell.id;
		});
		cell.addEventListener('mouseleave', () => {
			cell.textContent = ''; // Reset text on hover out
		});
	});

	//load the player's decks...
	createCard('p1_DE');
};
duel_init();

