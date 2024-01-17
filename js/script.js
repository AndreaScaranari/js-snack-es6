// ### SNACK 1
// Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo e la lista degli invitati in ordine di posto.

// nome del tavolo
const vipTable = "Tavolo Vip";

// lista guest in ordine di posto
const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];

// Per stampare il tutto, la tipografia vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
// Generiamo questo array in una variabile ``guestsList`` e stampiamolo in console.

const guestsList = guests.map((guest, i) => {
    return `Nome del tavolo: ${vipTable}, Nome del guest: ${guest}, Posizione in cui è sedutə: ${i+1}`
});

console.log(guestsList);

// ### SNACK 2
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...

// Array studenti:
const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        votes: 78,
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        votes: 96,
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        votes: 48,
    },
    {
        id: 145,
        name: "Gaia Borromini",
        votes: 74,
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        votes: 68,
    },
    {
        id: 102,
        name: "Piero della Francesca",
        votes: 50,
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        votes: 84,
    },
]

// Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
// Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
const students70More = students.filter(student => student.votes > 70);
console.log(students70More);

// Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const students70and120 = students.filter(student => student.votes > 70 && student.id > 120);
console.log(students70and120);

    // alternative
    // const students70and120 = students.filter(({votes, id}) => {votes > 70 && id > 120});
    // const students70and120 = students70More.filter(({id}) => {id > 120});
    

// dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
const studentsNamesUC = students.map(student => student.name.toUpperCase());
console.log(studentsNamesUC);

// # SNACK 3
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso.

const racingBikes = [
    {
        model: "bikea",
        weight: 10
    },
    {
        model: "bikeb",
        weight: 8
    },
    {
        model: "bikec",
        weight: 6
    },
    {
        model: "biked",
        weight: 12
    },
    {
        model: "bikee",
        weight: 20
    }
]

// Stampare in console la bici con peso minore utilizzando il destructuring.

let lightestBike = racingBikes[0];

racingBikes.forEach((racingBike) => {
    if (racingBike.weight < lightestBike.weight) {
        lightestBike = racingBike;
    }});

const { weight, model } = lightestBike
console.log(`La bici più leggera è: ${model.toUpperCase()} con un peso di ${weight}`);

// # SNACK 4
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// nome sarà l’unica proprietà da inventare voi, le altre saranno tutte settate a 0.

const teams = [
    {
        name: "Juventus",
        points: 0,
        fouls: 0
    },
    {
        name: "Milan",
        points: 0,
        fouls: 0
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0
    },
    {
        name: "Roma",
        points: 0,
        fouls: 0
    },
    {
        name: "Napoli",
        points: 0,
        fouls: 0
    },
];

// Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

teams.forEach((team) => {
    team.points = getRandomNumber(25, 50);
    team.fouls = getRandomNumber(40, 80);
});
// console.log(teams);

// Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console
const newTeams = teams.map(({name, fouls} = teams) => {
    return `Nome squadra: ${name}, Falli subiti: ${fouls}`;
})

console.log(newTeams);