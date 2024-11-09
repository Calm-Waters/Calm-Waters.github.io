const moduleName = "profile";
window[moduleName + '_layout'] = `
<div>
    <input type="text" id="content-input" class="input-field" placeholder="Enter some content...">
    <button id="submit-button" class="button">Submit</button>
    <p id="status"></p>
</div>
`;
window[moduleName + '_init'] = function() {

}
