// Gestion du menu burger
const burger = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
// *******************************************
document.addEventListener("DOMContentLoaded", () => {
  const jokeDisplay = document.getElementById("jokeDisplay");
  const btnJoke = document.getElementById("btnJoke");

  btnJoke.addEventListener("click", async () => {
    try {
      // Appel à l'API backend pour récupérer une blague aléatoire
      // Remplace l'URL par l'adresse de ton API backend sur Render
      const response = await fetch("https://nom-de-ton-api/blagues/random");
      const data = await response.json();

      // Affichage de la blague dans la page
      jokeDisplay.textContent = data.joke;
    } catch (error) {
      console.error("Erreur lors de la récupération de la blague :", error);
      jokeDisplay.textContent = "Impossible de charger une blague.";
    }
  });
});

// *******************************************

// API Render pour récupérer une blague
// const API_URL = "https://mon-api-carambar.onrender.com/api/blagues/random";
const API_URL = "https://carambarselectioncda-backend.onrender.com";
async function getJoke() {
  try {
    let response = await fetch(API_URL);
    let data = await response.json();
    document.getElementById("jokeDisplay").innerText = data.joke;
  } catch (error) {
    console.error("Erreur lors de la récupération de la blague :", error);
    document.getElementById("jokeDisplay").innerText =
      "Erreur de connexion à l'API.";
  }
}

// Écouteur d'événement sur le bouton
document.getElementById("btnJoke").addEventListener("click", getJoke);
