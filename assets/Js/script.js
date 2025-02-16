// Gestion du menu burger
const burger = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const closeButton = document.querySelector(".close-button");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active"); // Ajoute la classe active au burger
  closeButton.classList.toggle("active"); // Ajoute la classe active au bouton de fermeture
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("active");
  burger.classList.remove("active"); // Retire la classe active du burger
  closeButton.classList.remove("active"); // Retire la classe active du bouton de fermeture
});

// Gestion de la blague
document.addEventListener("DOMContentLoaded", () => {
  const btnJoke = document.getElementById("btnJoke");
  const jokeDisplay = document.getElementById("jokeDisplay");
  const loadingIndicator = document.createElement("p");
  loadingIndicator.textContent = "Chargement...";
  loadingIndicator.style.display = "none"; // Masqué par défaut
  jokeDisplay.parentNode.insertBefore(loadingIndicator, jokeDisplay);

  btnJoke.addEventListener("click", async () => {
    loadingIndicator.style.display = "block"; // Affiche l'indicateur de chargement
    try {
      // Envoi d'une requête pour obtenir une blague aléatoire
      // const response = await fetch('/api/jokes/random');
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );

      const data = await response.json();
      jokeDisplay.textContent = data.joke;

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération de la blague");
      }
      const joke = await response.json();

      // Mise à jour du contenu de l'élément jokeDisplay
      jokeDisplay.textContent = `${joke.question} - ${joke.answer}`;
    } catch (error) {
      console.error("Erreur lors de la récupération de la blague :", error);
      jokeDisplay.textContent = "Impossible de charger une blague.";
    } finally {
      loadingIndicator.style.display = "none"; // Cache l'indicateur de chargement
    }
  });
});
