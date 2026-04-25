export async function fetchHouses() {
    console.log("Hämtar data från houses.json via fetch.js...");
    const response = await fetch("houses.json"); 
    
    if (!response.ok) {
        throw new Error(`HTTP-error! Status: ${response.status}`);
    }
    
    return await response.json();
}