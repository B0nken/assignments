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
}

init();