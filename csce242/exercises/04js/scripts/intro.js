document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "helloworld";
    e.target.innerHTML = "done";
};

document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    const pImg = document.getElementById("img-plant");

    pImg.classList.remove("hidden");
    if (numDays <= 2) {
        pMessage.innerHTML = `Let ur plant rest its only been ${numDays} days.`;
        pImg.src = "https://dummyimage.com/150x150/556b2f/fff&text=happy+plant";
    } else if (numDays <= 5) {
        pImg.src = "https://dummyimage.com/150x150/d2d982/fff&text=thirsty ;";
        pMessage.innerHTML = `time 2 wate`;
    } else if (numDays <= 7) {
        pMessage.innerHTML = `Wilting 😬`;
    } else {
        pMessage.innerHTML = `bye bye plant X(`;
    }
};

// counting
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true;
btnStop.disabled = true;

btnStart.onclick = () => {
    countInterval = setInterval(() => {
        pCount.innerHTML = count++;
    }, 50);
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
};
btnPause.onclick = () => {
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = false;
};
btnStop.onclick = () => {
    count = 0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = false;
    btnStop.disabled = true;
};

// date display

setInterval(() => {
    const pDisplay = document.getElementById("date-display");
    const today = new Date();
    const seconds = today.getSeconds();
    const minutes = today.getMinutes();
    const hours = today.getHours();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    pDisplay.innerHTML = `${hours}:${minutes}:${seconds}    ${day}:${month}:${year}`;
}, 1000);




// toggle nav
document.getElementById("toggle-nav").onclick = () => {
    document.querySelector("#main-nav ul").classList.toggle("hide-small");
};


// user donations and corresponding thermometer

const GOAL = 10000;
document.getElementsByName("goal").innerHTML = GOAL;

document.getElementById("btn-donation").onclick = () => {
    const donoAmt = parseInt(document.getElementById("txt-donation").value);
    const donationP = document.getElementById("donation-message");

    percent = (donoAmt / GOAL) * 100;

    donationP.innerHTML = `You are at ${percent.toFixed(1)} % of the goal `;

    document.querySelector(":root").style.setProperty("--donation", percent + "%");



}