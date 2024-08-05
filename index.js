
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {getDatabase,
        ref,
        push} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

let fireData = "https://leads-tracker-app-ad583-default-rtdb.europe-west1.firebasedatabase.app/"

const firebaseConfig = {
    databaseURL: fireData
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "Groceries")


let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(groceries) {
    let listItems = ""
    for (let i = 0; i < groceries.length; i++) {
        listItems += `
            <li>
                    ${groceries[i]}
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
    
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
})