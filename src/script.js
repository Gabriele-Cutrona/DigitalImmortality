const dropdown = document.querySelector("nav .dropdown");
const dialog = document.querySelector("nav dialog");
const closeBtn = document.querySelector("nav .close");

dropdown.addEventListener("click", () => {
   dialog.showModal();
   dropdown.style.transform = "scale(0.9)";
   dropdown.addEventListener("transitionend", () => {
      dropdown.style.transform = "scale(1)";
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

const dontOpen = document.querySelector("#dontOpen");

dontOpen.addEventListener("mouseover", () => {
   dontOpen.style.color = "red";
   dontOpen.textContent = "Passa al prossimo Capitolo"
});

dontOpen.addEventListener("mouseout", () => {
   dontOpen.style.color = "white";
   dontOpen.textContent = "NON MI APRIRE";
});

dontOpen.addEventListener("click", () => {
   window.location.href = "Chapter2.html";
});