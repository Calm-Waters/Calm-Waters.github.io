const moduleName = "login";
window[moduleName + '_layout'] = `
    <div>
        <h1>Welcome to the Example Module</h1>
        <button id="printButton" onclick="printMessage()">Click me</button>
    </div>
`;
window.printMessage = function() {
    console.log('Hello from the Example Module!');
}
