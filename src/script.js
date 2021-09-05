const menuSwitch = document.querySelector("#menu-switch");
const allForms = document.querySelectorAll("form");




menuSwitch.addEventListener("click", event => {
    console.log("menu click");
})


allForms.forEach(form => {
    form.addEventListener("submit", event => {
        event.preventDefault();
    })
})