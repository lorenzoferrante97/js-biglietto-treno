// start code

// Processo:

// 1. richiesta dati all'utente
//      - età
//      - num km
// 2. calcolo costo biglietto
//      - costo iniziale in base ai km
//      - verifica se lo sconto è applicabile
//      - applicazione dello sconto se applicabile
// 3. inizializzare il num a sole due cifre decimali
// 4. stampare risultato

// code

let etaUtente = prompt("Inserisci la tua età", 15);
let kmUtente;
kmUtente = parseInt(prompt("Inserisci i km che percorrerai", 100));

console.log(`la tua età: ${etaUtente}`)
console.log(`i km che percorrerai: ${kmUtente}`)

//calcolo costo iniziale biglietto

const prezzoPerKm = 0.21;
let costoBiglietto = kmUtente * 0.21;

console.log(`costo iniziale biglietto: ${costoBiglietto}`)

//verifica sconti

if (etaUtente < 18) {
    console.log(`sconto per minorenni del 20% applicato`);
    costoBiglietto = costoBiglietto - [(costoBiglietto * 20) / 100];
} else if (etaUtente > 65) {
    console.log(`sconto per over 65 del 40% applicato`);
    costoBiglietto = costoBiglietto - [(costoBiglietto * 40) / 100];
}

//massimo due decimali

costoBiglietto = costoBiglietto.toFixed(2);

//risultato

console.log(`il costo finale del tuo biglietto è: ${costoBiglietto} `)

//end code

