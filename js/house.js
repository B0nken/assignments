import { fetchHouses } from "./fetch.js";
import { scareLevelText, showError } from "./utils.js";
import { Booking } from './booking.js';

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
    setupBooking(currentHouse)
  } catch (error) {
    console.error(error);
    showError("error-container", "Kunde inte ladda huset");
  }
}

function renderDetail(house) {
  const container = document.getElementById("house-details");
  const wifiInfo = house.hasWifi ? "Ja" : "Nej, total isolering";

  const scaryText = scareLevelText(house.scareLevel);

  container.innerHTML = `
    <h2>${house.name}</h2>
    <img src="/assignment4/img/${house.image}" alt="${house.name}">
    <div class="info">
    <p>Plats: ${house.location}</p>
    <p>Skräcknivå: ${scaryText}</p>
    <p>Spöktyper: ${house.ghostTypes.join(", ")}</p>
    <p>Wifi: ${wifiInfo}</p>
    <p>Pris per natt: ${house.pricePerNight} kr</p>
    </div>
    <div class="desc">
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

function setupBooking(house) {

    const booking = new Booking(house.name, house.pricePerNight)

    const from = document.getElementById("booking-form")
    const errorContainer = document.getElementById("book-error")
    const priceDisplay = document.getElementById("total-price")

    function updatePrice() {
        const days = parseInt(document.getElementById("book-days").value) || 1
        const code = document.getElementById("book-code").value || ""

        let addons = 0
        document.querySelectorAll(".addon-checkbox:checked").forEach(box => {
            addons += parseInt(box.value)
        })

        const currentPrice = booking.sumTotal(days, addons, code);
        priceDisplay.textContent = currentPrice
    }

    from.addEventListener("input", updatePrice)
    updatePrice()

    from.addEventListener("submit", (e) => {
        e.preventDefault()

        const dateString = document.getElementById("book-date").value
        const days = parseInt(document.getElementById("book-days").value) || 1
        const code = document.getElementById("book-code").value || ""

        let addons = 0
        document.querySelectorAll(".addon-checkbox:checked").forEach(box => {
            addons += parseInt(box.value)
    })
    const errors = booking.check(dateString, days)

    if (errors.length > 0) {
        errorContainer.innerHTML = errors.join("<br>")
        return
    }
    errorContainer.innerHTML = ""

    const finalPrice = booking.sumTotal(days, addons, code)

    const receiptHtml = booking.getConfirmation(dateString, days, finalPrice)

    const bookingSection = document.getElementById("booking-section")
    bookingSection.innerHTML = receiptHtml
})

}
initHouse()
