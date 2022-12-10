let userCheck = document.querySelector("input[name=checkbox]");
let messageAlert = document.getElementById("message-alert");

userCheck.addEventListener("change", userMessage);

function userMessage() {
    if (userCheck.checked){
        console.log("Checked.");
        messageAlert.innerHTML = "Thanks for signing up!";
    } else {
        console.log("Unchecked");
        messageAlert.innerHTML = "";
    }
};