function askName()
{
	let name = prompt("Quel est votre nom ?"); // On déclare une variable (name) à laquelle on attribue une valeur de retour (=) de prompt
	console.log("Bonjour " + name); 
	let a = "<h2>Bonjour " + name + "</h2>"; // On déclare la variable "a" à laquelle on on affecte une concaténation de valeurs strings et variables
	document.body.innerHTML += a; // "document" est une variable définie par le langage, à laquelle on peut attribuer des méthodes. C'est une concaténation de variables. += appelle tout ce qu'il y a à gauche du = ET tout ce qu'il y a droite
}

function askBirthDate()
{
	let year = prompt ("Quelle est votre date de naissance ? (YYYY/MM/DD)");
	let today = new Date(); // on cree un objet date avec des valeurs et des méthodes
	let birthday = Date.parse(year);
	let age = today - birthday;
	let realAge = age/1000/60/60/24/365;
	console.log(realAge);
	let b = "<h3>Vous avez " + Math.floor(realAge) + " ans</h3>";
	document.body.innerHTML += b;
}

askName();
askBirthDate();


