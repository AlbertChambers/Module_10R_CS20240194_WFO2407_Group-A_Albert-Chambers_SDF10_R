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

let myItems = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const shopFromLocalStorage = JSON.parse( localStorage.getItem("myItems") )

if (shopFromLocalStorage) {
    myItems = shopFromLocalStorage
    render(myItems)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myItems = []
    render(myItems)
})

inputBtn.addEventListener("click", function() {
    myItems.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myItems", JSON.stringify(myItems) )
    render(myItems)
})