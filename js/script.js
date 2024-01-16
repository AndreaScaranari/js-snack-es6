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
// Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni

// Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
// Questo è l'elenco degli studenti:

// Id|Name|Grades
// 213|Marco della Rovere|78
// 110|Paola Cortellessa|96
// 250|Andrea Mantegna|48
// 145|Gaia Borromini|74
// 196|Luigi Grimaldello|68
// 102|Piero della Francesca|50
// 120|Francesca da Polenta|84