const dontOpen = document.querySelector("#dontOpen");

dontOpen.addEventListener("mouseover", () => {
   dontOpen.style.color = "red";
   dontOpen.textContent = "Passa al prossimo Capitolo";
});

dontOpen.addEventListener("mouseout", () => {
   dontOpen.style.color = "white";
   dontOpen.textContent = "NON MI APRIRE";
});

dontOpen.addEventListener("click", () => {
   window.location.href = "Chapter2.html";
});
