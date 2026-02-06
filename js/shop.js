import { clothes } from './clothes.js';

let cart = JSON.parse(localStorage.getItem("shop-cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
    createProducts()
    updateCart()
})
//function for creating every card with html
function createProducts() {
    const grid = document.getElementById("shop-grid");
    //uses .map() to go through every item and creates a card for it
    grid.innerHTML = clothes.map(item => `<article class="clothes-card">
        <img src="../img/${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p><em>${item.category}</em></p>
        <p>${item.desc}</p>
        <p class="price">${item.price}: kr</p>
        <button class="add" data-id="${item.id}">Lägg till i vagnen</button>
        </article>`).join(``);//.join('') removes comma from the html so it doesnt show on the site

        document.querySelectorAll(".add").forEach(btn => { //selects every button with the class .add
            btn.addEventListener("click", (e)=> { 
                const id = parseInt(e.target.dataset.id)//gets ID from button and converts to a number
                addCart(id);
            })
        })
}

function addCart(id) {
    const product = clothes.find(i => i.id === id); //searches for right product based on id
    const added = cart.find(item => item.id === id); //checks if the item exists already

    if (added) {
        added.amount++; //if its already added, increase amount
    } else {
        cart.push({...product, amount: 1}); //if it doesnt exist, create a copy and add to amount
    }
    updateCart()
    save()
}

function updateCart() {
    const cartList = document.getElementById("cartItems");
    const totalElement = document.getElementById("total");

    cartList.innerHTML = cart.map(item => `
        <li>${item.amount}st ${item.name} - ${item.price * item.amount}kr</li>`).join(``) || "<li>Kundvagnen är tom</li>";//creates list in the cart

        const total = cart.reduce((sum, item) => sum + (item.price * item.amount), 0); //calculates the total depending on which items are added and how many
        totalElement.textContent = total; //writes out the total in html
}

function save() {
    localStorage.setItem("shop-cart", JSON.stringify(cart)); //localStorage can only save text, so the array gets converted to a string
    updateCart();
}

document.getElementById("clear").addEventListener("click", () => {
    cart = [];
    save()
    updateCart()
    
})