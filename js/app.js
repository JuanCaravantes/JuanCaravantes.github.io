const display = document.querySelector("#display");
const menu = document.querySelector("#menu");
const Logo = document.querySelector("#Logo");
const menuLink = document.querySelectorAll("#menuLink");

display.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

Logo.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

menuLink.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
});