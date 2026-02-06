import { assignmentsData } from "./assignment.js";

document.addEventListener("DOMContentLoaded", () => {
    createNav();
    if (document.getElementById("card-cont"))  createCard();
});

function createNav() {
    const nav = document.querySelector("#navigation");
    const path = window.location.pathname;
    const isHome = path.endsWith("index.html") || path.endsWith("/");
    const subPage = !isHome; 

    const prefix = subPage ? "../" : "";
    const ul = document.createElement("ul");

    const homeLi = document.createElement("li");
    const homeA = document.createElement("a");
    homeA.href = `${prefix}index.html`;
    homeA.textContent = "Hem";

    if (!subPage) {
        homeA.classList.add("active")
    }

    homeLi.appendChild(homeA);
    ul.appendChild(homeLi)

    assignmentsData.forEach(task => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = prefix + task.link;
        a.textContent = task.title;

        const current = window.location.pathname;

        if (window.location.pathname.endsWith(task.link)) {
    a.classList.add("active");
}

        li.appendChild(a);
        ul.appendChild(li);    
    });
    nav.appendChild(ul);
}

function createCard() {
     const cont = document.querySelector("#card-cont");
     assignmentsData.forEach(task => {
         const div = document.createElement("div");
         div.className = "card";
         div.innerHTML = `
         <h3>${task.title}</h3>
         <p>${task.desc}</p>
         <a href="${task.link}" class="stretched"></a>`;
         cont.appendChild(div);
         
     });
 }