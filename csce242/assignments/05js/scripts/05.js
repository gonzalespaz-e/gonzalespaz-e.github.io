// Making bubbel and tail simulatenously visible onclick using hidden class toggle
document.getElementById("speech-section").onclick = () => {
    document.getElementById("bubble").classList.toggle("hidden");
    document.getElementById("tail").classList.toggle("hidden");
};

// Using selection on change to display the selection option + the text
document.getElementById("drinks").onchange = (e) => {
    document.getElementById("drink-selection").innerHTML = e.target.value + ": Nice choice!";
};

// Adding absolutely positioned emoji on click by toggling hidden status
document.getElementById("card-img").onclick = () => {
    document.getElementById("sticker-emoji").classList.toggle("hidden");
}