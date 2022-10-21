let novcanice = [10,5,20,50,5,10,100,20,50,];
let broj_novcanica = novcanice.length
let brojac = 0;
while(brojac<broj_novcanica) {
  console.log('-------');
  console.log('Uslov prosao');
  console.log('novcanica na poziciji [${brojac}]: $(novcanica[brojac]}');

  brojac++
}
console.log('## KRAJ PETLJE ##')
 if(brojac < broj_novcanica) {
  console.log('brojac je manji'); 
 } else {
  console.log('brojac nije manji');
 }
console.log('brojac:' + brojac);