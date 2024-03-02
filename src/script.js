const dropdown = document.querySelector("nav .dropdown");
const dialog = document.querySelector("nav dialog");
const closeBtn = document.querySelector("nav .close");

dropdown.addEventListener("click", () => {
   dialog.showModal();
});

closeBtn.addEventListener("click", () => {
   dialog.style.animation = "FadeOut 0.2s";
   dialog.addEventListener("animationend", function closeDialog() {
      dialog.close();
      dialog.style.animation = "FadeIn 0.2gs";
      dialog.removeEventListener("animationend", closeDialog);
   });
});