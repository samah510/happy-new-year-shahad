// Countdown Timer for New Year's (January 1, 2025)
let countdownDate = new Date("Jan 1, 2025 00:00:00").getTime();
let countdownElement = document.getElementById("countdown");
let countdownSection = document.getElementById("countdown-section");

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // When the countdown is finished
    if (distance < 0) {
        clearInterval(x);
        countdownSection.style.display = "none"; // Hide countdown
        showMainContent(); // Show main content (Happy New Year and Block)
    }
}, 1000);

// Show Main Content After Countdown
function showMainContent() {
    document.getElementById("happy-new-year").style.display = "block";
    document.getElementById("minecraft-block").style.display = "block";
    document.getElementById("rain-sound").play();
}

// Show Note When Minecraft Block is Clicked
function showNote() {
    const block = document.getElementById("minecraft-block");
    const note = document.getElementById("note");

    // Add breaking animation and show the note
    block.style.transform = "scale(0)";
    setTimeout(function () {
        block.style.display = "none"; // Hide the block after breaking
        note.style.display = "block"; // Show the note
    }, 500); // Delay to simulate "breaking" effect
}
