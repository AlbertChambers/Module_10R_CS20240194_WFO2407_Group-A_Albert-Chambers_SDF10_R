/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-ad583-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    console.log(inputValue)
});



let myItems = []
const inputEl = document.getElementById("input-field")
const inputBtn = document.getElementById("add-button")
const cartList = document.getElementsById("cart-list")

inputBtn.addEventListener("click", function() {
    myItems.push(inputEl.value)
})

for (let i = 0; i < myItems.length; i++) {
    cartList.innerHTML += "<li>" + myItems[i] + "</li>"
}