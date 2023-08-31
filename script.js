

const navbar = document.querySelector(".navbar");
const myiconed = document.querySelector(".fa-bars");
const iconCancel = document.querySelector(".icon-close");

myiconed.addEventListener("click", () => {
    navbar.classList.add("activenavbar");
});
iconCancel.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});