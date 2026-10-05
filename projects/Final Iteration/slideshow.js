document.getElementById("hero-arrow-right").onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelector("#slides :not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

    if (nextSlide == null) {
        nextSlide = document.querySelector("#slides :first-child");
    }

    slide(currentSlide, nextSlide);
};

document.getElementById("hero-arrow-left").onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelector("#slides :not(.hidden)");
    let prevSlide = currentSlide.previousElementSibling;

    if (prevSlide == null) {
        prevSlide = document.querySelector("#slides :last-child");
    }

    slide(currentSlide, prevSlide);
};

const slide = (currentSlide, nextSlide) => {
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");

    const leftArrow = document.getElementById("hero-arrow-left");
    const rightArrow = document.getElementById("hero-arrow-right");

    if (nextSlide.id === "light-slide") {
        leftArrow.classList.add("dark-arrow");
        rightArrow.classList.add("dark-arrow");
    } else {
        leftArrow.classList.remove("dark-arrow");
        rightArrow.classList.remove("dark-arrow");
    }
};
