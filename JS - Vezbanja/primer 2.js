let novcanice = [200,10,5,20,50,5,10,100,20,50,];
let broj_novcanica = novcanice.length
let ukupno_novca = 0;
  
//Jednostavniji nacin Verzije 006 //

for(let brojac in novcanice) {
console.log(novcanice[brojac])
  ukupno_novca +=  novcanice[brojac];
}
console.log(' ## KRAJ PETLJE ##')
console.log('Ukupno novca: ' +  ukupno_novca + ' eura.');