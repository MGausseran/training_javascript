/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    const performOperation = operation => {
        let opOne = parseFloat(document.getElementById("op-one").value);
        let opTwo = parseFloat(document.getElementById("op-two").value);
    };
    switch (operation) {
        case "addition":
            let result = (opOne + opTwo);
            alert(result)
            break;
        case "substraction":
            result = opOne - opTwo;
            break;
        case "multiplication":
            result = opOne * opTwo;
            break;
        case "division":
            // Vérifier la division par zéro
            if (opTwo === 0) {
                alert("La division par zéro n'est pas autorisée.");
                return;
            }
            result = opOne / opTwo;
            break;
        default:
            alert("Opération inconnue.");
            return;
    }
})();
