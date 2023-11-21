/*MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite nella tabella
qui sotto.*/


let dipendenti = [
    {
        name_surname: "Wayne Barnett",
        role: "Founder & CEO",
        image: "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name_surname: "Angela Caroll",
        role: "Chief Editor",
        image: "./img/angela-caroll-chief-editor.jpg"
    },
    {
        name_surname: "Walter Gordon",
        role: "Office Manager",
        image: "./img/walter-gordon-office-manager.jpg"
    },
    {
        name_surname: "Angela Lopez",
        role: "Social Media Manager",
        image: "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        name_surname: "Scott Estrada",
        role: "Developer",
        image: "./img/scott-estrada-developer.jpg"
    },
    {
        name_surname: "Barbara Ramos",
        role: "Graphic",
        image: "./img/barbara-ramos-graphic-designer.jpg"
    }
];

/*MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto*/

console.log(dipendenti);

/*MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/

for (let i = 0; i < dipendenti.length; i++) {
    console.log(dipendenti[i].name_surname);
    console.log(dipendenti[i].role);
    console.log(dipendenti[i].image);
    console.log("");
}

/*BONUS 1:
Trasformare la stringa foto in una immagine effettiva*/

for (let i = 0; i < dipendenti.length; i++) {

document.getElementById("card").innerHTML +=`
<div class="card col-3 m-1 text-center">
        <img src="${dipendenti[i].image}"  alt="">
        <div class="card-body">
          <h5 class="card-title">${dipendenti[i].name_surname}</h5>
          <p class="card-text">${dipendenti[i].role}</p>
        </div>
      </div>
      `
}