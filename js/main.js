import { assignmentsData } from "./assignment.js"; //imports data for every assignment

document.addEventListener("DOMContentLoaded", () => {
    createNav();
    if (document.getElementById("card-cont"))  createCard(); //if the id "card-cont" exists upon load, create new cards, only works on start page since its the only place it exists
});

function createNav() { //global function for creating the global navigation
    const nav = document.querySelector("#navigation");
    const path = window.location.pathname; //gets current adress
    const isHome = path.endsWith("index.html") || path.endsWith("/"); //checks if we are on startpage (index.html)
    const subPage = !isHome;  //if we are on a subpage, not index.html

    const prefix = subPage ? "../" : ""; //if wew are on a subpage back out from folder../
    const ul = document.createElement("ul");

    const homeLi = document.createElement("li");
    const homeA = document.createElement("a");
    homeA.href = `${prefix}index.html`; //puts the link
    homeA.textContent = "Hem";

    if (!subPage) {
        homeA.classList.add("active") //if we are on homepage, add active class
    }

    homeLi.appendChild(homeA);
    ul.appendChild(homeLi)

    assignmentsData.forEach(task => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = prefix + task.link; //set link ../ + searchway
        a.textContent = task.title;//puts the right title from assignment.js

       

        if (window.location.pathname.endsWith(task.link)) {
    a.classList.add("active"); //if we are on a subpage, search which subplage and add class active
}

        li.appendChild(a);
        ul.appendChild(li);    
    });
    nav.appendChild(ul);
}

function createCard() {
     const cont = document.querySelector("#card-cont");
     assignmentsData.forEach(task => {
         const div = document.createElement("div"); //creates a new div
         div.className = "card";
         div.innerHTML = `
         <h3>${task.title}</h3>
         <p>${task.description}</p>
         <a href="${task.link}" class="stretched"></a>`; //uses the data from assignment.js to build the cards
         cont.appendChild(div); //puts the card in container on the side
         
     });
 }