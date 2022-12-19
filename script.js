console.log("Gute Nacht#0221 was here!")

const textElement = document.getElementById('developer');
const contact = document.getElementById('contact');
var text = 'Developer';

const texts = ['Developer', 'Ratter', 'Student', 'Malware Analyst', 'Imchada User', "FOSS Contributor 🌟"];
var count = 0;

setInterval(() => {
    if (count >= texts.length) {
        count = 0;
    }
    text = texts[count];
    count++;
  textElement.textContent = text;
}, 3000);

function redirect1() {
    window.location.href = "https://github.com/gutenacht0221/Nox-Builder"
}
function redirect2() {
    window.location.href = "https://github.com/gutenacht0221/rat-builder-discord-bot"
}
function redirect3() {
    window.location.href = "https://github.com/gutenacht0221/native-obfuscator-gui"
}

function copyToClipboard(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

contact.addEventListener('click', () => {
    alert('Copied to clipboard!');
    copyToClipboard('Gute Nacht#0221');
    event.preventDefault();
})

