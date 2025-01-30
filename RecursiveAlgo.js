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
//sujet 02
function estBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Test de la fonction
console.log(estBissextile(2024)); // true
console.log(estBissextile(1900)); // false
console.log(estBissextile(2000)); // true
console.log(estBissextile(2023)); // false

//.
//.
//.
//sujet03:
//Séquence de Fibonacci :
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));
//.
//.
//.
//.
//sujet04:
function puissance(base, exposant) {
    if (exposant === 0) {
        return 1;
    }

    if (exposant > 0) {
        return base * puissance(base, exposant - 1);
    }

    return 1 / puissance(base, -exposant);
}

// Exemple d'utilisation
console.log(puissance(2, 3)); // Affiche 8
console.log(puissance(5, -2)); // Affiche 0.04
console.log(puissance(7, 0)); // Affiche 1
