import showAlert from "../js/message.js";
import {showConfirm} from "../js/message.js";

document.getElementById("btn-alert").addEventListener("click", ()=>{
    showAlert(" Hello Alert");
});

document.getElementById("btnConfirm").addEventListener("click", ()=>{
    showConfirm("Hello confirm")
})

document.getElementById("btnPrompt").addEventListener("click", ()=>{
    showPrompt("Hello prompt")
})

