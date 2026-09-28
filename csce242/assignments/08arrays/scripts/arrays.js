// elements to quickly populate lists
const mountains = ["Asheville", "Boone", "Hot Springs", "Table Rock"];
const beaches = ["Myrtle Beach", "Folly Beach", "Hilton Head", "Outer Banks"];


//pass selected location to show relevant iframe w its corresponding map loc
const showMap = (place) => {
    const frame = document.getElementById("map-frame");
    frame.src = "https://maps.google.com/maps?q=" + encodeURIComponent(place) + "&output=embed";
    frame.classList.remove("hidden");
};

document.getElementById("destination-select").onchange = () => {
    const type = document.getElementById("destination-select").value;
    const list = document.getElementById("destination-list");
    list.innerHTML = "";

    // make populated list hidde nby default
    document.getElementById("map-frame").classList.add("hidden");

    let places;
    if (type === "Mountains") {
        places = mountains;
    } else if (type === "Beaches") {
        places = beaches;
    }
    // create our list items and their respective iframe click actions
    for (let i = 0; i < places.length; i++) {
        const place = places[i];
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerHTML = place;
        a.href = "#";
        a.onclick = () => {
            showMap(place);
            return false;
        };

        li.append(a);
        list.append(li);
    }
};
