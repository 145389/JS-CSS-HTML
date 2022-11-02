//Funkcije //
/*
let nekretnine = {
  stan: 70000,
  kuca: 150000,
  plac: 30000
};
let meseci = 10 * 12;
let rata = nekretnine.stan / meseci;

console.log(meseci + 'meseci.');
console.log(rata + 'eura');
console.log(`Mesecna rata za stan iznosi ${rata} na 10 godina.`);*/

//Sa skracenim decimalnim zapisom [ispisana rata] (na dve decimale)//
/*
let nekretnine = {
  stan: 70000,
  kuca: 150000,
  plac: 30000
};
let meseci = 10 * 12;
let rata = nekretnine.stan / meseci;
console.log(rata.toFixed(2));
console.log(meseci + 'meseci.');
console.log(rata + 'eura');
console.log(`Mesecna rata za stan iznosi ${rata} na 10 godina.`);
*/

// Sitne stvari koje mozemo da menjamo // 

/*
let nekretnine = {
  stan: 70000,
  kuca: 150000,
  plac: 30000
};
let meseci = 10 * 12;
let rata = nekretnine.stan / meseci;
rata = rata.toFixed(2); 

console.log(meseci + 'meseci.');
console.log(rata + 'eura');
console.log(`Mesecna rata za stan iznosi ${rata} na 10 godina.`);*/

// Dodavanjem jos jedne variable: //

/* 
let nekretnine = {
  stan: 70000,
  kuca: 150000,
  plac: 30000
};
 // STAN
let godine = 15;
let meseci = godine * 12;
let rata = nekretnine.stan / meseci;
rata = rata.toFixed(2); 
console.log('-----------------------')
console.log(meseci + 'meseci.');
console.log(rata + 'eura');
console.log(`Mesecna rata za stan iznosi ${rata} na ${godine} godina.`);


// ---------
// PLAC

godine = 5;
meseci = godine * 12;
rata = nekretnine.plac / meseci;
console.log('-----------------------')
console.log(meseci + 'meseci.');
console.log(rata + 'eura');
console.log(`Mesecna rata za plac iznosi ${rata} na ${godine} godina.`);

//-------------------
// KUCA

godine = 20;
meseci = godine * 12;
rata = nekretnine.kuca / meseci;
console.log('-----------------------')
console.log(meseci + 'meseci.');
console.log(rata + 'eura');
console.log(`Mesecna rata za kucu iznosi ${rata} na ${godine} godina.`);

*/
// KOD NE VALJA PONAVLJATI ; DA KOD NE BI PONAVLJALI TREBAJU NAM FUNKCIJE.
// FUNNKCIJE SLUZE DA U NJIH SMESTIMO JEDAN DEO KODA KOJI SE PONAVLJA I POZIVA VISE PUTA 



/*
function racunanje_mesecne_rate(godine, vrsta_nekretnine) {
  console.log(godine);
  console.log(vrsta_nekretnine);

};
racunanje_mesecne_rate(15, 'stan');

racunanje_mesecne_rate(5, 'plac');

racunanje_mesecne_rate(20, 'kuca');

let nekretnine = {
  stan: 70000,
  kuca: 150000,
  plac: 30000
};
*/



 //OBJEKAT TREBA DA BUDE IZNAD FUNKCIJE
let nekretnine = {
  stan: 70000,
  kuca: 150000,
  plac: 30000
};
 //PRORACUN ZA STAN NA 15 GODINA.
racunanje_mesecne_rate(15, 'stan');
//PRORACUN ZA PLAC NA 5 GODINA.
racunanje_mesecne_rate(5, 'plac');
//PRORACUN ZA KUCU NA 20 GODINA.
racunanje_mesecne_rate(20, 'kuca');



function racunanje_mesecne_rate(godine, vrsta_nekretnine) {
  let meseci = godine * 12;
  let rata = nekretnine[vrsta_nekretnine] / meseci;
  rata = rata.toFixed(2);
console.log('--------------------------');
  console.log(meseci + 'meseci.');
  console.log(rata + 'eura');
  console.log(`Mesecna rata za ${vrsta_nekretnine} iznosi ${rata} na ${godine} godina.`);

  console.log(rata);

};



/*
 // STAN
let godine = 15;
let meseci = godine * 12;
let rata = nekretnine.stan / meseci;
rata = rata.toFixed(2); 
console.log('-----------------------')
console.log(meseci + 'meseci.');
console.log(rata + 'eura');
console.log(`Mesecna rata za stan iznosi ${rata} na ${godine} godina.`);


// ---------
// PLAC

godine = 5;
meseci = godine * 12;
rata = nekretnine.plac / meseci;
console.log('-----------------------')
console.log(meseci + 'meseci.');
console.log(rata + 'eura');
console.log(`Mesecna rata za plac iznosi ${rata} na ${godine} godina.`);

//-------------------
// KUCA

godine = 20;
meseci = godine * 12;
rata = nekretnine.kuca / meseci;
console.log('-----------------------')
console.log(meseci + 'meseci.');
console.log(rata + 'eura');
console.log(`Mesecna rata za kucu iznosi ${rata} na ${godine} godina.`);

*/