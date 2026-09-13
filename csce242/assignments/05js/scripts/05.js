document.getElementById("speech-section").onclick = () => {
    document.getElementById("bubble").classList.toggle("hidden");
    document.getElementById("tail").classList.toggle("hidden");
};

document.getElementById("drinks").onchange = (e) => {
    document.getElementById("drink-selection").innerHTML = e.target.value + ": Nice choice!";
};

document.getElementById("card-img").onclick = () => {
    document.getElementById("sticker-emoji").classList.toggle("hidden");
}