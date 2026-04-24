let houses = [];

async function init() {
    try {
        console.log("Trying to get houses.json..")
        const response = await fetch("houses.json")
        if (!response.ok) {
            throw new Error(`ERROR! Status: ${response.status}`)
        }

        houses = await response.json()
        console.log("Data succesfully fetched:", houses);
    } catch (error) {
        console.error("Something went wrong when getting the data", error)
    }
    renderHouse(houses)
}

function renderHouse(houses) {
    const cont = document.getElementById("list")
    cont.innerHTML = ""
console.log(houses.length)
    
houses.forEach(house => {
    const card = document.createElement("div")

    card.innerHTML = `
    <img src="/assignment4/img/${house.image}" alt="${house.name}">
    <h3>${house.name}</h3>
    <p> Pris: ${house.pricePerNight} kr</p>
    <a href="/assignment4/house.html?id=${house.id}">Läs mer</a>`

    cont.appendChild(card)
});
}


init();