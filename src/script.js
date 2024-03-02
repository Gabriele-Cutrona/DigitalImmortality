const dropdown = document.querySelector("nav .dropdown");
const dialog = document.querySelector("nav dialog");
const close = document.querySelector("nav .close")

dropdown.addEventListener("click", () => {
   dialog.showModal();
})

close.addEventListener("click", () => {
   dialog.close();
})