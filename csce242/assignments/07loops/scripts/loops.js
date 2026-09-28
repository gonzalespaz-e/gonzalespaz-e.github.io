// colors to randomly assign to each car
const carColors = ["teal", "yellowgreen", "purple", "indigo", "lightblue", "orchid", "coral"];

// two lane top positions within the road
const laneTops = [40, 150];

// creates a car w body, roof, wheels) and adds it to the road
const createCar = (color, top, left) => {
    const car = document.createElement("div");
    car.classList.add("car");
    car.style.backgroundColor = color;
    car.style.top = top + "px";
    car.style.left = left + "px";

    const roof = document.createElement("div");
    roof.classList.add("roof");
    car.append(roof);

    const wheelLeft = document.createElement("div");
    wheelLeft.classList.add("wheel");
    wheelLeft.style.left = "10px";
    car.append(wheelLeft);

    const wheelRight = document.createElement("div");
    wheelRight.classList.add("wheel");
    wheelRight.style.left = "56px";
    car.append(wheelRight);

    document.getElementById("road").append(car);
};

// loop start
for (let i = 0; i < 10; i++) {
    const color = carColors[Math.floor(Math.random() * carColors.length)];
    const top = laneTops[Math.floor(Math.random() * laneTops.length)];
    const left = Math.floor(Math.random() * 700);
    createCar(color, top, left);
}
