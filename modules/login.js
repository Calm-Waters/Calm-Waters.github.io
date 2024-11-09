const moduleName = "login";
window[moduleName + '_layout'] = `
    <div>
        <h1>Welcome to the Example Module</h1>
        <button id="printButton">Click me to print a message</button>
    </div>
`;
function printMessage() {
    console.log('Hello from the Example Module!');
}
document.getElementById('printButton')?.addEventListener('click', printMessage); 
