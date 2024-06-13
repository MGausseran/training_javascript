/* becode/javascript
 *
 * /05-arrays/06-find-in-array/script.js - 5.6: recherche dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = [
        {
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
        {
            firstname: "Jean",
            lastname: "Dupont",
            email: "jeandupont@example.com",
        },
    ];

    let indexFound = -1;
    let emailFound = null;

    for (let i = 0; i < people.length; i++) {
        if (people[i].firstname === "Jean" && people[i].lastname === "Dupont") {
            emailFound = people[i].email;
            indexFound = i;
            break; 
        }
    }

    console.log("Email de Jean Dupont :", emailFound);
    console.log("Index de Jean Dupont dans le tableau people :", indexFound);

})();

