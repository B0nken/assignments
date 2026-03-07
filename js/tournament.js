import { Fight } from "./fight.js";

let fighters = [];
let fightsAmount = []
let fightNum = 1;

const bracketCont = document.getElementById("bracket")

async function init() {
    await contestantsFetch()
    start()
}

async function contestantsFetch() {
    try {

        const response = await fetch('guitarists.json');
        fighters = await response.json();
        console.log("Fighters fetched", fighters)
    } catch (error){
console.log("Error", error)
    }
}
    

function start() {
    bracketCont.innerHTML = "";
    fightNum = 1;

    createRound(fighters, "Kvartsfinal")

}

function createRound(currentFighters, roundName) {
    const roundCont = document.createElement("div");
    roundCont.className = "round"

    const roundTitle = document.createElement("h3");
    roundTitle.textContent = roundName;
    roundCont.appendChild(roundTitle);

    fightsAmount = []

    for (let i = 0; i < currentFighters.length; i += 2) {
        const fight = new Fight(currentFighters[i], currentFighters[i+1]);

        fightsAmount.push(fight);

        roundCont.appendChild(fight.create())
    }

}


