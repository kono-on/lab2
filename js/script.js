// Define backgrounds for use by buttons
backgrounds = [
        "home",
        "italy",
        "switzerland",
        "slovenia"
    ];
randomBackground = "home";

// Changes alert info based on current homepage
document.getElementById("info").onclick = function() {
    if (randomBackground === "home") {
        alert("This is the homepage.");
    }
    if (randomBackground === "italy") {
        alert("This is Italy!");
    }
    if (randomBackground === "switzerland") {
        alert("This is Switzerland!");
    }
    if (randomBackground === "slovenia") {
        alert("This is Slovenia!");
    }
}

// Pop out the tab, as long as it is not already popped out
popUp = null
document.getElementById("pop").onclick = function() {
    if (window.opener) {
        alert("This window is already popped out!");
        return;
    }
    
    popUp = window.open(window.location.href, "popUp","width=800,height=800");
}

// Randomizes the background, applying it to the screen on click
document.getElementById("random").onclick = function() {

    randomBackground =
        backgrounds[Math.floor(Math.random() * backgrounds.length)];

    document.body.className="content " + randomBackground;
}

document.getElementById("homeButton").onclick = function() {
    if (window.opener && !window.opener.closed) {
        window.close();
    }
    // Checks and overrides info when you return to homepage
    randomBackground = "home";
    document.body.className="content " + randomBackground;
}