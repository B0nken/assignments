document.addEventListener("DOMContentLoaded", () => {
    createNav();
    if (document.getElementById("card-cont"))  createCard()
});

function createNav() {
    const nav = document.querySelector("#globalNav");
    const subPage = window.location.pathname.includes("assignment")
    const prefix = subPage ? "../" : "";
    const ul = document.createElement("ul");

    assignmentsData.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = prefix + item.link;
        a.textContent = item.title;

        if (window.location.pathname.includes(item.id)) a.classList.add("active")

        li.appendChild(a);
        ul.appendChild(li);    
    });
    nav.appendChild(ul);
}

function createCard() {
    const cont = document.querySelector("#card-cont");
    assignments.forEach(item => {
        const div = document.createElement("div");
        div.classname = "card";
        div.innerHTML = `<h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a href="${item.link}">Visa</a>`;
        cont.appendChild(div);
        
    });
}