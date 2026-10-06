// containing class for all vacation attributes etc.
class Vacation {
    constructor(title, type, description, thingsToDo, image, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }
    // need for subheader label distinguishing btwn beaches or moutains
    getLabel() {
        return this.type + " Vacation";
    }
    // helper 
    makeElement(tag, className, html) {
        const el = document.createElement(tag);
        el.className = className;
        el.innerHTML = html;
        return el;
    }

    getCard() {
        const card = this.makeElement("div", "vacation-card", "");
        const header = this.makeElement("div", "card-header", "");

        header.append(this.makeElement("h3", "", this.title));
        header.append(this.makeElement("p", "card-label", this.getLabel()));

        const img = document.createElement("img");
        img.src = this.image;
        img.alt = this.title + " - " + this.getLabel();

        card.append(header);
        card.append(img);

        // clicking anywhere on the card opens this vacation in the modal
        card.onclick = () => showModal(this);

        return card;
    }
}

// array of classes 2 store locations
const vacations = [
    new Vacation(
        "Asheville",
        "Mountain",
        "A Blue Ridge city where the mountains sit right behind downtown.",
        "Tour the Biltmore Estate, drive the Blue Ridge Parkway, explore the River Arts District.",
        "images/image.png",
        "https://maps.google.com/maps?q=Asheville%2C%20NC&output=embed"
    ),
    new Vacation(
        "Boone",
        "Mountain",
        "A scenic college town in the Blue Ridge Mountains with beautiful hiking and skiing.",
        "Go skiing, visit Appalachian State University, hike Grandfather Mountain.",
        "images/image2.png",
        "https://maps.google.com/maps?q=Boone%2C%20NC&output=embed"
    ),
    new Vacation(
        "Hot Springs",
        "Mountain",
        "A tiny river town on the French Broad, right where the Appalachian Trail crosses through.",
        "Soak in the mineral springs, hike a stretch of the AT, raft the French Broad.",
        "images/image8.png",
        "https://maps.google.com/maps?q=Hot%20Springs%2C%20NC&output=embed"
    ),
    new Vacation(
        "Table Rock",
        "Mountain",
        "A granite dome above the Linville Gorge with one of the best views in the state.",
        "Hike to the summit, climb the rock face, camp along the gorge rim.",
        "images/image7.png",
        "https://maps.google.com/maps?q=Table%20Rock%20Mountain%2C%20NC&output=embed"
    ),
    new Vacation(
        "Sunset Beach",
        "Beach",
        "A quiet island at the south end of the Brunswick Islands with wide, uncrowded sand.",
        "Walk out to the Kindred Spirit mailbox, bike the island, watch the sunset from the pier.",
        "images/image6.png",
        "https://maps.google.com/maps?q=Sunset%20Beach%2C%20NC&output=embed"
    ),
    new Vacation(
        "Edisto Beach",
        "Beach",
        "An undeveloped Lowcountry beach known for its driftwood boneyard at Botany Bay.",
        "Walk Botany Bay at sunrise, hunt for shark teeth, kayak the salt marsh.",
        "images/image5.png",
        "https://maps.google.com/maps?q=Edisto%20Beach%2C%20SC&output=embed"
    ),
    new Vacation(
        "Oak Island",
        "Beach",
        "A laid back island with miles of open shoreline and almost no high rises.",
        "Fish off the pier, visit the Oak Island Lighthouse, rent a golf cart.",
        "images/image4.png",
        "https://maps.google.com/maps?q=Oak%20Island%2C%20NC&output=embed"
    ),
    new Vacation(
        "Pawleys Island",
        "Beach",
        "One of the oldest resort islands on the East Coast, full of creeks and marsh boardwalks.",
        "Crab in the creek, shop the Hammock Shops, bike the island loop.",
        "images/image3.png",
        "https://maps.google.com/maps?q=Pawleys%20Island%2C%20SC&output=embed"
    )
];

// fill  modal with clicked vacation
const showModal = (vacation) => {
    document.getElementById("modal-map").src = vacation.mapSrc;
    document.getElementById("modal-title").innerHTML = vacation.title;
    document.getElementById("modal-type").innerHTML = vacation.type;
    document.getElementById("modal-description").innerHTML = vacation.description;
    document.getElementById("modal-things").innerHTML = vacation.thingsToDo;

    document.getElementById("modal").classList.remove("hidden");
};

const hideModal = () => {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("modal-map").src = "";
};

// put every card into the grid when the page loads
const showVacations = () => {
    const grid = document.getElementById("vacation-grid");
    grid.innerHTML = "";

    for (let i = 0; i < vacations.length; i++) {
        grid.append(vacations[i].getCard());
    }
};

document.getElementById("modal-close").onclick = hideModal;

showVacations();
