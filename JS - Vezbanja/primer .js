/*
let brend = document.getElementsByTagName('span');

for (let auto of brend ) {
console.log(auto.innerText);
};

console.log('----------------------')
let modeli = document.getElementsByClassName('automobil-model');


for (let model of modeli ) {
  console.log(model.innerText);
  };

  console.log('----------------------')
  let najbolji = document.getElementById('recenica');
  console.log(najbolji.innerText);

  console.log('----------------------')
*/


let brend = document.querySelectorAll('span')

for (let auto of brend) {
console.log(auto.innerText);

};
console.log('----------------------')
let modeli = document.querySelectorAll('.automobil-model');


for (let model of  modeli) {

console.log(model.innerText);

};
console.log('----------------------')
let recenica = document.querySelector('#recenica');

console.log(recenica.innerText);
