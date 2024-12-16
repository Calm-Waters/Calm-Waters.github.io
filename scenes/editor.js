editor_layout = `
<div class="scene hbox">
	<div class="vbox">
		<button onclick="loadScene('login')">return to login</button>
		<button onclick="loadScene('hub')">return to hub</button>
		<button onclick="loadScene('editor')">reload editor</button>
	</div>
	<form name="editor_form" id="editor_form">
		Name: <input type="text"  					onchange="handle_edit(event)"/><br/>
		Card Type: <select 	name="card_base" 	id="card_base" 	onchange="handle_edit(event)"></select><br/>
		Category: <select 	name="category" 	id="category" 	onchange="console.log('hi')" disabled></select><br/>
		Type: <select 		name="type" 		id="type" 	onchange="console.log('hi')" disabled></select><br/>
		Ability: <select 	name="ability" 		id="ability" 	onclick="toggleOption(this)" onchange="console.log('hi')" disabled></select><br/>
		Attribute: <select 	name="attribute" 	id="attribute"	onchange="console.log('hi')" disabled></select><br/>
		<button type="submit" onclick="event.preventDefault()">Upload</button>
	</form>
</div>
`
editor_init = function() {
	const selectData = {
		"card_base": ["Monster","Spell","Trap"],
		"category": [],
		"ability": ["Gemini"],
		"type": ["Aqua","Beast","Beast-Warrior","Cyberse","Dinosaur","Dragon","Fairy","Fiend","Fish","Insect","Machine","Plant","Psychic","Pyro","Reptile","Rock","Sea Serpent","Spellcaster","Thunder","Warrior","Winged Beast","Wyrm","Zombie","Creator God","Divine-Beast"],
		"attribute": ["LIGHT","DARK","FIRE","WATER","WIND","EARTH","DIVINE"]
	};
	populateSelectWithDelay(selectData);
};
editor_init();

function handle_edit({ target: { id, value } }) {
	if (id == 'card_base') {
		const enabledFields = {
			Monster: ['category', 'type', 'ability', 'attribute'],
			Spell:   ['category'],
			Trap:    ['category'],
		};

		const activeFields = enabledFields[value] || [];
		const allFields = ['category', 'type', 'ability', 'attribute'];

		if (value == 'Monster')	{
			setSelectOptions('category',["Normal","Effect","Ritual","Fusion","Synchro","Xyz","Pendulum","Link"]);
			setSelectOptions('ability',["Gemini","Tuner","Toon"]);
		}
		if (value == 'Spell') 	setSelectOptions('category',["Normal","Quick-Play","Field","Continuous","Ritual","Equip"]);
		if (value == 'Trap') 	setSelectOptions('category',["Normal","Continuous","Counter"]);

		allFields.forEach(field => {
			document.getElementById(field).disabled = !activeFields.includes(field);
		});
	}
}

function setSelectOptions(selectId, options) {
	const selectElement = document.getElementById(selectId);
	// Handle case when the element is not found or is not a select element
	if (!selectElement || (selectId !== 'ability' && selectElement.tagName !== 'SELECT')) {
		return console.warn(`Element with id "${selectId}" is not a valid target or not found.`);
	}
	selectElement.innerHTML = `<option hidden selected value=""></option>` +
		options.map(option => `<option value="${option}">${option}</option>`).join('');
}

function populateSelectElements(data) {
	Object.entries(data).forEach(([selectId, options]) => {setSelectOptions(selectId, options);});
}

function populateSelectWithDelay(data, attempts = 10) {
	if (Object.keys(data).every(id => document.getElementById(id))) return populateSelectElements(data);
	if (attempts > 0) setTimeout(() => populateSelectWithDelay(data, attempts - 1), 100);
	else console.warn("Select elements not found after multiple attempts.");
}

function toggleOption(selectElement){
	//attempt to only toggle on actual selection
	//const isOpen = selectElement.getAttribute('data-open') === 'true';
	//selectElement.setAttribute('data-open', isOpen ? 'false' : 'true');
	//if (!isOpen) return;
	const selectedOption = selectElement.options[selectElement.selectedIndex];
	const checkmark = "🗸"; // Unicode Checkmark (U+1F5F8)
	//add/remove checkmark from chosen option(s)
	if (selectedOption.textContent.startsWith(checkmark)) selectedOption.textContent = selectedOption.textContent.substring(checkmark.length);
	else selectedOption.textContent = checkmark + selectedOption.textContent;
	//(de-)bold chosen option
	if (selectedOption.style.fontWeight === 'bold') selectedOption.style.fontWeight = 'normal';
	else selectedOption.style.fontWeight = 'bold';
}
