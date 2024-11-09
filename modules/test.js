const moduleName = "test";
window[moduleName + '_layout'] = `
<style>

</style>
<div class="scene vbox centercontainer">
	<h1>Test Page</h1>
	<button onclick="loadPage('hub')">Return to HUB</button>
    <button onclick="loadPage('login')">Exit</button>
</div>
`;
