// ### SNACK 1
// Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo e la lista degli invitati in ordine di posto.

// nome del tavolo
const vipTable = [];

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

const guestsList = guests.map((guest, i) => {return `Nome del tavolo: Tavolo Vip, Nome del guest: ${guest}, Posizione in cui è sedutə: ${i+1}`});

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
const students70More = students.filter((student) => {
if (student.votes > 70) {return student}
});

console.log(students70More);

// Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const students70and120 = students.filter((student) => {
    if (student.votes > 70 && student.id > 120) {return student}
    });
    
    console.log(students70and120);

// dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
const studentsNamesUC = students.map ((student) => {
    return student.name.toUpperCase()});

console.log(studentsNamesUC);