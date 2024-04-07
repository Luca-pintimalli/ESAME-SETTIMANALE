/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/


const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets)


//////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/


pets.sort()
console.log(pets)


//////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/


pets.reverse()
console.log(pets)


//////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


let firstElement = pets.shift();
pets.push(firstElement);
console.log(pets)


//////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
  
]


for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "A"; 
}
  console.log(cars)


//////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/


const macchina = {
  brand: "opel",
  model: "corsa",
  color: "blue",
  trims: ["Corsa" , "GS", "Ultimate"],
  licensePlate: "A"
}
cars.push(macchina)
console.log(cars)


//////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/


const justTrims = []

for( let i=0; i<cars.length ; i++){
  justTrims.push(cars[i].trims[0]);
}
 console.log(justTrims)


//////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/


for( let i=0; i < cars.length ; i++){
  const firstLetter = cars[i].color.charAt(0);

  if (firstElement === "b"){
    console.log("Fizz");
  } else{
    console.log("Buzz");
  }
}


//////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while (i < numericArray.length && numericArray[i] !== 66) {
  console.log(numericArray[i]);
  i++;
}
//////////////////////////////////////////////////////////////////////////////////////
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let newArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'z'];

let posizioneLettere =[] ;

for (let i = 0; i < charactersArray.length; i++) {
  let posizioneLettere = charactersArray[i];
}
switch (newArray.indexOf(charactersArray) + 1) {
  case 1:
    posizioneLettere.push('a');
    break;
    case 2:
    posizioneLettere.push('b');
    break;
    case 3:
    posizioneLettere.push('c');
    break;
    case 4:
    posizioneLettere.push('d');
    break;
    case 5:
    posizioneLettere.push('e');
    break;
    case 6:
    posizioneLettere.push('f');
    break;
    case 7:
    posizioneLettere.push('g');
    break;
    case 8:
    posizioneLettere.push('h');
    break;
    case 9:
    posizioneLettere.push('i');
    break;
    case 10:
    posizioneLettere.push('j');
    break;
    case 11:
    posizioneLettere.push('k');
    break;
    case 12:
    posizioneLettere.push('l');
    break;
    case 13:
    posizioneLettere.push('m');
    break;
    case 14:
    posizioneLettere.push('n');
    break;
    case 15:
    posizioneLettere.push('o');
    break;
    case 16:
    posizioneLettere.push('p');
    break;
    case 17:
    posizioneLettere.push('q');
    break;
    case 18:
    posizioneLettere.push('r');
    break;
    case 19:
    posizioneLettere.push('s');
    break;
    case 20:
    posizioneLettere.push('t');
    break;
    case 21:
    posizioneLettere.push('u');
    break;
    case 22:
    posizioneLettere.push('v');
    break;
    case 23:
    posizioneLettere.push('z');
    break;
    default:
      posizioneLettere.push('Carattere non trovato');
  }

console.log(posizioneLettere);

