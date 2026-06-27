const formulaire = document.getElementById("invocation");
const resultat = document.getElementById("resultat");
const doggo = document.getElementById("doggo");
const magic = document.getElementById("magic");
const againButton = document.getElementById("again");

formulaire.addEventListener("submit", (event) => {
	event.preventDefault();

	const prenom = document.getElementById("prenom").value;
	const creature = document.getElementById("creature").value;

	const message = `${prenom}, the ${creature} heard you and will follow you from now on!`;
	document.getElementById("message").textContent = message;

	doggo.style.backgroundImage = `url('assets/${creature}-walk.png')`;
	doggo.classList.add("cache");
	magic.src = "assets/Dark-Bolt.gif?" + Date.now();
	magic.classList.remove("cache");

	setTimeout(() => {
		magic.classList.add("cache");
		doggo.classList.remove("cache");
	}, 600);

	formulaire.classList.add("cache");
	resultat.classList.remove("cache");
});

againButton.addEventListener("click", () => {
	formulaire.classList.remove("cache");
	resultat.classList.add("cache");
});