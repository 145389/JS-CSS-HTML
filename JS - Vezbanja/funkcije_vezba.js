let nekretnine = {
  stan: 70000,
  kucu: 150000,
  plac: 30000
};
 //PRORACUN ZA STAN NA 15 GODINA.
racunanje_mesecne_rate(15, 'stan');
//PRORACUN ZA PLAC NA 5 GODINA.
racunanje_mesecne_rate(5, 'plac');
//PRORACUN ZA KUCU NA 20 GODINA.
racunanje_mesecne_rate(20, 'kucu');

/*
OVA FUNKCIJA IZRACUNAVA MESECNU RATU ZA ODREDJENU NEKRETNINU

*/
function racunanje_mesecne_rate(godine, vrsta_nekretnine) {
  let meseci = godine * 12;
  let rata = nekretnine[vrsta_nekretnine] / meseci;
  rata = rata.toFixed(2);
console.log('--------------------------');
  
  console.log(`Mesecna rata za ${vrsta_nekretnine} iznosi ${rata} eura na ${godine} godina.`);

  console.log(rata);

};
