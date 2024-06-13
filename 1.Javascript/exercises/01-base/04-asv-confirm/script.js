/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function demanderInfos() {
    // Demande à l'utilisateur son âge, sexe et ville
    let age = prompt("Quel âge as-tu ?");
    let sexe = prompt("Quel est ton sexe ? (H/F/Autre)");
    let ville = prompt("Dans quelle ville habites-tu ?");

    // Convertir l'âge en nombre pour la validation
    age = Number(age);

    // Valider que l'âge est un nombre positif
    if (isNaN(age) || age <= 0) {
        alert("Veuillez entrer un âge valide.");
        return demanderInfos(); // Recommence la demande d'infos
    }

    // Afficher la confirmation
    let confirmation = confirm(
        "Confirmez-vous les informations suivantes ?\n" +
        "Âge : " + age + "\n" +
        "Sexe : " + sexe + "\n" +
        "Ville : " + ville
    );

    // Si l'utilisateur ne confirme pas, recommencer
    if (!confirmation) {
        demanderInfos();
    } else {
        alert("Merci de votre confirmation.")
        window.close();
    }
}

// Appeler la fonction pour démarrer le processus
demanderInfos();

