// Gestion du menu burger
const burger = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Gestion de la blague
document.addEventListener("DOMContentLoaded", () => {
  const jokeDisplay = document.getElementById("jokeDisplay");
  const btnJoke = document.getElementById("btnJoke");
  const loadingIndicator = document.createElement("p");
  loadingIndicator.textContent = "Chargement...";
  loadingIndicator.style.display = "none"; // Masqué par défaut
  jokeDisplay.parentNode.insertBefore(loadingIndicator, jokeDisplay);

  btnJoke.addEventListener("click", async () => {
    loadingIndicator.style.display = "block"; // Affiche l'indicateur de chargement
    try {
      const response = await fetch(
        "https://carambarselectioncda-backend.onrender.com/api/blagues/random"
      );
      const data = await response.json();
      jokeDisplay.textContent = data.joke;
    } catch (error) {
      console.error("Erreur lors de la récupération de la blague :", error);
      jokeDisplay.textContent = "Impossible de charger une blague.";
    } finally {
      loadingIndicator.style.display = "none"; // Cache l'indicateur de chargement
    }
  });
});
