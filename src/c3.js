const alreadyIn = document.querySelector("#alreadyIn");

alreadyIn.addEventListener("mouseover", () => {
   alreadyIn.style.color = "red";
   alreadyIn.textContent = "Passa alla prossima pagina";
});

alreadyIn.addEventListener("mouseout", () => {
   alreadyIn.style.color = "white";
   alreadyIn.textContent = "\"Ci sei già dentro\"";
});

alreadyIn.addEventListener("click", () => {
   window.location.href = "Sources.html";
});