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
}

// counting
let countInterval;
let count = 0;
