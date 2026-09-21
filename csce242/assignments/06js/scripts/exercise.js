const daysOfClass = 25;
const attendancePts = 7;
document.getElementById("class-missed").onchange = (e) => {
    daysMissed = parseInt(e.target.value);
    daysPercent = daysMissed / daysOfClass;
    percentLost = daysPercent * attendancePts;

    absenceMessage = document.getElementById("deduction-mess");
    if (percentLost != null && daysMissed <= 25) {
        document.getElementById("percentage-p").innerHTML = `You will lose ${percentLost.toFixed(1)}% for missing ${daysMissed} days of class :o`;
    } else {
        document.getElementById("percentage-p").innerHTML = "";
    }

    if (daysMissed == 0) {
        absenceMessage.innerHTML = "No days missed? U got perfect attendance !";
    } else if (daysMissed <= 2) {
        absenceMessage.innerHTML = "Not too shabby, almost perfect attendance !";
    } else if (daysMissed <= 5) {
        absenceMessage.innerHTML = "Doin Ok... however try and make it to a couple more.";
    } else if (daysMissed <= 10) {
        absenceMessage.innerHTML = "Yikesss... Might wanna try and come, you keep missing you'll fall behind";
    } else if (daysMissed <= 25) {
        absenceMessage.innerHTML = "R u still takin the class????";
    } else {
        absenceMessage.innerHTML = "";
    }
};

// Exercise 1 / Exercise 2 nav toggling
document.getElementById("nav-exercise1").onclick = (e) => {
    e.preventDefault();
    document.getElementById("exercise1-content").classList.remove("hidden");
    document.getElementById("exercise2-content").classList.add("hidden");
};

document.getElementById("nav-exercise2").onclick = (e) => {
    e.preventDefault();
    document.getElementById("exercise2-content").classList.remove("hidden");
    document.getElementById("exercise1-content").classList.add("hidden");
};

document.getElementById("up-arrow").onclick = () => {
    const arrow = document.getElementById("up-arrow");
    arrow.innerHTML = arrow.innerHTML === "▼" ? "▲" : "▼";
    document.getElementById("exercises").classList.toggle("hidden");
};

const today = new Date();
// Get a Date from a defined date, december 4 (count for months starts at 0)
const december4 = new Date(today.getFullYear(), 11, 4);
// measurement is given in ms, then * 60 sec * 60 mins * 24 horus to get days
const daysLeft = Math.round((december4 - today) / (1000 * 60 * 60 * 24));

const countMessage = document.getElementById("day-count-message");
document.getElementById("day-count").innerHTML = `<strong>${daysLeft} days</strong> until end of semester!`;
if (daysLeft <= 30) {
    countMessage.innerHTML = "Just 1 month left !";
} else if (daysLeft < 100) {
    countMessage.innerHTML = "100 days or less left!";
} else {
    countMessage.innerHTML = "Not time to start counting yet bro";
}


