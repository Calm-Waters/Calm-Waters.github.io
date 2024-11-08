window.hub_mod = `
<style>
.vscroll {
	overflow: hidden;
	overflow-y: auto; 
	max-height: 100%; 
	display: flex; 
	flex-direction: column; 
	justify-content: flex-start;
	pointer-events: auto;
}
.hub button {
	min-width: 300px;
	margin: 10px;
	max-width: 95%;
	padding: 5px;
}

#chat-container {
	width: 300px;
	height: 400px;
	display: flex;
	flex-direction: column;
	border: 1px solid #ddd;
	padding: 10px;
	background: #f9f9f9;
}

#chat-box {
	flex: 1;
	overflow-y: auto;
	margin-bottom: 10px;
}

#chat-box div {
	margin: 5px 0;
}

#chat-input {
	flex: 0;
	padding: 10px;
	width: 100%;
	box-sizing: border-box;
}

#send-button {
	padding: 10px;
	width: 100%;
	background-color: #4CAF50;
	color: white;
	border: none;
	cursor: pointer;
}

#send-button:hover {
	background-color: #45a049;
}
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
 	<div id="chat-container">
		<div id="chat-box"></div>
		<input type="text" id="chat-input" placeholder="Type a message...">
		<button id="send-button">Send</button>
	</div>
</div>
`;

