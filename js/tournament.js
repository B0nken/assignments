import { Match } from "./fight.js";

let fighters = [];
let fightsAmount = []
let fightNum = 1;

const bracketCont = document.getElementById("bracket")


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

    
}


