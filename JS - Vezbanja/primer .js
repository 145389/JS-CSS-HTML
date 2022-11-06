
//SELEKTOVANJE ELEMENTA PO ID-u I BRISANJE IZ HTML-a 
let recenica = document.querySelector('#recenica');
recenica.remove();  //REMOVE() SLUZI ZA BRISANJE.

//KREIRANJE NOVOG DIV ELEMENTA 
let novi_el = document.createElement('div');
novi_el.classList = 'novi-element'; //DODAJEMO KLASU 
novi_el.innerHTML = '<hr>Pozdram!!!', // DODAJEMO HTML I TEXT

 
let body = document.querySelector('body') // SELEKTUJEMO BODY TAG 
body.appendChild(novi_el); // NA KRAJU BODY  TAGA DODAJEMO NAS NOVI ELEMENT

