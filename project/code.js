// JavaScript code
function clearCode() {
    document.getElementById('code-box').innerText = "";
    alert("Cleared!");
    setTimeout(showCodeBox, 1000); // Re-show the code box after a delay of 1 second
}

function copyCode() {
    const codeText = document.querySelector('.code-box pre').innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        alert("Copied to clipboard!");
    }).catch((err) => {
        console.error("Failed to copy code:", err);
    });
}

let codeBox = document.getElementById('code-box');
let buttonsContainer = document.getElementById('buttons-container');
let settingsIcon = document.getElementById('settings-icon');
let minimizeButton = document.querySelector('.minimize');
let crossButton = document.querySelector('.cross');

function minimizeCodeBox() {
    codeBox.style.display = 'none';
    buttonsContainer.style.display = 'none';
    settingsIcon.style.display = 'block';
    minimizeButton.style.display = 'none'; 
    crossButton.style.display = 'none'; 
}

function showCodeBox() {
    codeBox.style.display = 'block';
    buttonsContainer.style.display = 'flex';
    settingsIcon.style.display = 'none';
    minimizeButton.style.display = 'block'; 
    crossButton.style.display = 'block'; 
}

function toggleCodeVisibility() {
    if (codeBox.style.display === 'none') {
        showCodeBox();
    } else {
        minimizeCodeBox();
    }
}

settingsIcon.addEventListener('click', toggleCodeVisibility);
minimizeButton.addEventListener('click', minimizeCodeBox);
crossButton.addEventListener('click', minimizeCodeBox);
document.getElementById('options-icon').addEventListener('click', function() {
    settingsIcon.style.display = 'block';
    codeBox.style.display = 'none';
    buttonsContainer.style.display = 'none';
    minimizeButton.style.display = 'none'; 
    crossButton.style.display = 'none'; 
});

// Initially hide the settings button
settingsIcon.style.display = 'none';

// Call clearCode function initially to clear the content
clearCode();
