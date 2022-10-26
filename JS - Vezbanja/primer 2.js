
/*let novcanice = [200,10,5,20,50,5,10,100,20,50,];

for(let novcanica of  novcanice) {
  console.log(novcanica);
} */
 
/* let automobili = ['Audi', 'BMW', 'Porsche', 'Mercedes'];

for (let automobil of automobili ) {
  console.log(automobil);
} */ 

/* let automobili = ['Audi', 'BMW', 'Porsche', 'Mercedes'];

automobili.forEach(function (automobil) {
  console.log(automobil);

}); */
/*
let automobili = { 
  prvi_auto: 'Audi', 
  drugi_auto: 'BMW', 
  treci_auto: 'Porsche',
  cetvrti_auto: 'Mercedes'
};
console.log(automobili);  */

  //Ovo je primer kada imamo jednu informaciju //
  /*
let automobili = { 
  audi: '50.000',
  bmw: '60.000',
  porsche: '70.000',
  mercedes: '80.000'
};

console.log(automobili);*/

 //Primer sa vise informacija [za svaki pojedinacno mozemo staviti niz] // 

//Definisani objekti//
/*let automobili = { 
  audi: ['70.000', '2017', 'Q7' ],
  bmw: ['50.000', '2018', '330D'],
  porsche: ['60.000', '2016', 'Boxter'],
  mercedes: ['100.000', '2019', '5400']
};

console.log(automobili);*/


// Koristeci se for petljom dobijamo listu niza  // 
/*
let automobili = { 
  audi: ['70.000', '2017', 'Q7' ],
  bmw: ['50.000', '2018', '330D'],
  porsche: ['60.000', '2016', 'Boxter'],
  mercedes: ['100.000', '2019', '5400']
};

for(automobil in automobili) {
  console.log(automobil)
  console.log(automobili[automobil]);
  console.log( '-----------------')
}*/

let automobili = { 
  audi: ['70.000', '2017', 'Q7' ],
  bmw: ['50.000', '2018', '330D'],
  porsche: ['60.000', '2016', 'Boxter'],
  mercedes: ['100.000', '2019', '5400']
};

for(automobil in automobili) {
 
  console.log(automobili[automobil]);
  console.log( '-----------------')
}

automobili.audi.forEach(element => {
  console.log(element);
});

