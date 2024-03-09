const dontOpen = document.querySelector("#dontOpen");

dontOpen.addEventListener("mouseover", () => {
   dontOpen.style.color = "red";
   dontOpen.textContent = "Passa al prossimo Capitolo";
});

dontOpen.addEventListener("mouseout", () => {
   dontOpen.style.color = "var(--text)";
   dontOpen.textContent = "NON MI APRIRE";
});

dontOpen.addEventListener("click", () => {
   window.location.href = "Chapter2.html";
});
