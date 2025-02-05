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
