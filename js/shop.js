import { clothes } from './clothes.js';

document.addEventListener("DOMContentLoaded", () => {
    createProducts()
})

function createProducts() {
    const grid = document.getElementById("shop-grid");

    grid.innerHTML = clothes.map(item => `<article class="clothes-card">
        <img src="/img/${item.image}" alt=${item.name}>
        <h3>${item.name}</h3>
        <p><em>${item.category}</em></p>
        <p>${item.desc}</p>
        <p class="price">${item.price}: kr</p>
        <button class="add" data-id="${item.id}">Lägg till i vagnen</button>
        </article>`).join('');
}