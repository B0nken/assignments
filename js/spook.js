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
    ghostTypes(houses)
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


function ghostTypes(houses) {
    const choose = document.getElementById("filter-ghost")

    const types = new Set()

    houses.forEach(house => {
        house.ghostTypes.forEach(ghost => types.add(ghost))
    })

    console.log(types)

    types.forEach(type => {
        const option = document.createElement("option")
        option.value = type
        option.textContent = type.charAt(0).toUpperCase() + type.slice(1)

        choose.appendChild(option)
    })
}

init();