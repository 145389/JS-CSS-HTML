let novcanice = [10,5,20,50,5,10,100,20,50,];
let broj_novcanica = novcanice.length
let ukupno_novca = 0;
// Postavljamo brojac na 0 ; postavljamo uslov ; inkrementacija brojaca;//
// Unutar petlje stavljamo onaj deo koda koji zelimo da se ponavlja//
for(brojac = 0; brojac < broj_novcanica; brojac++) {
  console.log(novcanice[brojac]);

  // REZULTAT JE 50 ZATO STO SVAKI PUT UKUPNO_NOVCA DOBIJA NOVU VREDNOST//
  ukupno_novca = novcanice[brojac];

}
console.log(' ## KRAJ PETLJE ##')
console.log(ukupno_novca)