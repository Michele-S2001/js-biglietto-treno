# calcolo del prezzo del biglietto del treno

## Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  - il prezzo del biglietto è definito in base ai km (0.21 € al km)
  - va applicato uno sconto del 20% per i minorenni
  - va applicato uno sconto del 40% per gli over 65

## Pseudo codice
- Chiedere all'utente il numero totale di km che desidera percorrere
  - Dichiarare una variabile assegnando un prompt per raccogliere l'informazione facendo in modo che venga tramutato da stringa a numero
- Chiedere all'utente l'età
  - Dichiarare una variabile assegnando un prompt per raccogliere l'informazione facendo in modo che venga tramutato da stringa a numero
- Calcolare il prezzo del biglietto [ n-km * K(0.21) ]
  - Dichiarare una variabile che racchiuda il numero dei km da percorrere moltiplicati per la costante di 0.21 euro al km
- Con l'utilizzo dell'età calcolare se va applicato dello sconto al biglietto
  - SE età è minore di 18:
    - applicare lo sconto del 20%
  - ALTRIMENTI SE età è maggiore di 65:
    - applicare lo sconto del 40%
  
- Stampare sul document il risultato con un limite di 2 cifre decimali (per i centesimi)
  - Fare in modo di limitare le cifre decimali del prezzo finale a 2
  - Dichiarare una variabile che prenda l'elemento "price" dal DOM 
  - Stampare il risultato utilizzando .innerHTML

