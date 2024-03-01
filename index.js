const form = document.querySelector("#emailForm")
const input = document.querySelector("#emailInput");
const errorMsg = document.querySelector("#errorText")
const errorIcon = document.querySelector(".error-icon");

input.addEventListener("blur", () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const email = input.value.trim();

    if (!regex.test(email)) {
        form.classList.add("error");
        errorMsg.classList.remove("disabled");
        errorIcon.classList.remove("disabled");
    }
    else {
        form.classList.remove("error");
        errorMsg.classList.add("disabled");
        errorIcon.classList.add("disabled");
    }
});