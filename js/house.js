import { fetchHouses } from "./fetch.js";
import { scareLevelText, showError } from "./utils.js";

async function initHouse() {
  const params = new URLSearchParams(window.location.search);
  const houseId = parseInt(params.get("id"));

  if (!houseId) {
    showError("error-container", "Inget hus valt, gå tillbaka till startsidan");
    return;
  }

  try {
    const houses = await fetchHouses();
    const currentHouse = houses.find((house) => house.id === houseId);

    if (!currentHouse) {
      showError("error-container", "Detta hus existerar inte");
      return;
    }
    renderDetail(currentHouse);
    renderMap(currentHouse)
  } catch (error) {
    console.error(error);
    showError;
  }
}

function renderDetail(house) {
  const container = document.getElementById("house-details");
  const wifiInfo = house.hasWifi ? "Ja" : "Nej, total isolering";

  const scaryText = scareLevelText(house.scareLevel);

  container.innerHTML = `
    <h2>${house.name}</h2>
    <img src="/assignment4/img/${house.img}" alt="${house.name}"
    <div class="info">
    <p>Plats: ${house.location}</p>
    <p>Skräcknivå: ${scaryText}</p>
    <p>Spöktyper: ${house.ghostTypes.join(", ")}</p>
    <p>Wifi: ${wifiInfo}</p>
    <p>Pris per natt: ${house.pricePerNight} kr</p>
    </div>
    <div class=""desc>
    <h3>Beskrivning</h3>
    <p>${house.description}</p>
    </div>`;
}

function renderMap(house) {
    const map = L.map("map").setView([house.coordinates.lat, house.coordinates.lng], 13)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    L.marker([house.coordinates.lat, house.coordinates.lng])
    .addTo(map)
    .bindPopup(`<p>${house.name}</p><br>
        ${house.location}`)
}

initHouse();
