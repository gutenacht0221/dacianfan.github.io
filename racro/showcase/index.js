console.log("dxxxxy#0776 was here...")

particlesJS.load("particles-js", "particles.json", () => {
    console.log("callback - particles.js config loaded");
})

function ReturnHome() {
    window.location.replace("../index.html");
}