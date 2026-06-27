const formulaire = document.getElementById("invocation");

formulaire.addEventListener("submit", (event) => {
	event.preventDefault();

	const prenom = document.getElementById("prenom").value;
	const creature = document.getElementById("creature").value;

	const message = `${prenom}, the ${creature} heard you and will follow you from now on!`;

	document.getElementById("message").textContent = message;

	document.getElementById("invocation").classList.add("cache");
	document.getElementById("resultat").classList.remove("cache");
});

const boutonAgain = document.getElementById("again");

boutonAgain.addEventListener("click", () => {
	document.getElementById("invocation").classList.remove("cache");
	document.getElementById("resultat").classList.add("cache");
});