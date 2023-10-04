// Calcolo del prezzo del biglietto con eventuali sconti

// Chiedere il numero di km: Dichiarare una variabile assegnando un prompt per raccogliere l'informazione facendo in modo che venga tramutato da stringa a numero
const kmNumber = parseInt(prompt('Inserire i km che desidera percorrere: '));

// Chiedere all'utente l'età: Dichiarare una variabile assegnando un prompt per raccogliere l'informazione facendo in modo che venga tramutato da stringa a numero
const age = parseInt(prompt('Inserire la sua età: '));

// Calcolare il prezzo del biglietto [ n-km * K(0.21) ]: Dichiarare una variabile che racchiuda il numero dei km da percorrere moltiplicati per la costante di 0.21 euro al km
const pricePerKm = 0.21;
let fullTicketPrice = kmNumber * pricePerKm;


// Con l'utilizzo dell'età calcolare se va applicato dello sconto al biglietto
// - SE età è minore di 18:
//     - applicare lo sconto del 20%
//   - ALTRIMENTI SE età è maggiore di 65:
//     - applicare lo sconto del 40%
//   - ALTRIMENTI non apportare alcuno sconto


if (age < 18) {
  let discount = fullTicketPrice * 0.2;
  let discountedPrice = fullTicketPrice - discount;
  discountedPrice = discountedPrice.toFixed(2);
} else if (age > 65) {
  let discount = fullTicketPrice * 0.4;
  let discountedPrice = fullTicketPrice - discount;
  discountedPrice = discountedPrice.toFixed(2);
} 

// Stampare sul document il risultato con un limite di 2 cifre decimali (per i centesimi)
// Dichiarare una variabile che prenda l'elemento "price" dal DOM 
const priceDomElement = document.getElementById('train-price');

// Stampare il risultato utilizzando .innerHTML
priceDomElement.innerHTML = //???;
