//sujet01:
//Ticket Pricing :
// Demander l'âge de l'utilisateur
let age = parseInt(prompt("Entrez votre âge :"));

let prix;

if (age <= 12) {
    prix = 10; // Prix pour les enfants
} else if (age >= 13 && age <= 17) {
    prix = 15; // Prix pour les adolescents
} else if (age >= 18) {
    prix = 20; // Prix pour les adultes
} else {
    alert("Âge invalide");
}

// Afficher le prix
alert("Le prix du billet est de " + prix + " $.");
//.
//.
//.
//sujet02:
//Séquence de Fibonacci :
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));
