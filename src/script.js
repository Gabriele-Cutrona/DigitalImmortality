const dropdown = document.querySelector("nav .dropdown");
const dialog = document.querySelector("nav dialog");
const closeBtn = document.querySelector("nav .close");

dropdown.addEventListener("click", () => {
   dialog.showModal();
   dropdown.style.transform = "scale(0.9)";
   dropdown.addEventListener("transitionend", () => {
      dropdown.style.transform = "";
   });
});

closeBtn.addEventListener("click", () => {
   dialog.style.animation = "FadeOut 0.2s";
   dialog.addEventListener("animationend", function closeDialog() {
      dialog.close();
      dialog.style.animation = "FadeIn 0.2s";
      dialog.removeEventListener("animationend", closeDialog);
   });
});

const html = document.querySelector("html");
const themeChange = document.querySelector(".themeChange");
const HomeBtnImg = document.querySelector(".homebtn img");
const DropdownImg = document.querySelector(".dropdown img");

function switchTheme() {
   html.id = html.id === "dark" ? "light" : "dark";
   HomeBtnImg.src =
      html.id === "light"
         ? "imgs/icons/homelight.svg"
         : "imgs/icons/homedark.svg";
   DropdownImg.src =
      html.id === "light"
         ? "imgs/icons/dropdownlight.svg"
         : "imgs/icons/dropdowndark.svg";
}

themeChange.addEventListener("click", () => {
   switchTheme();
   themeChange.src =
      html.id === "light" ? "imgs/icons/lightlight.svg" : "imgs/icons/dark.svg";
});

const themeChangeMobile = document.querySelector(".themeChangeMobile");

themeChangeMobile.addEventListener("click", () => {
   switchTheme();
   themeChangeMobile.src =
      html.id === "light" ? "imgs/icons/lightlight.svg" : "imgs/icons/dark.svg";
});
