const lista1 = [1,2,3,1,2,3,4,2,2,2,1,];
  
const lista1Count = {};
  
lista1.map(function (elemento) {if (lista1Count[elemento]) {lista1Count[elemento] += 1;}else {lista1Count[elemento] = 1;}});

//Lista1Count se convierte en esta llave {1: 3, 2: 5, 3: 2, 4: 1}

const lista1Array = Object.entries(lista1Count).sort(function (elementoA, elementoB) {return elementoA[1] - elementoB[1];});


//Object.entries(lista1Count) convierte la lista en esto lista1Array=[['1', 3],['2', 5],['3', 2],['4', 1]]


//esta expresion ordena la lita de menora mayor: sort(function (elementoA, elementoB) {return elementoA[1] - elementoB[1];});

const moda = lista1Array[lista1Array.length - 1];

//pruebas


const lista1 = [1,2,3,1,2,3,4,2,2,2,1,];

casa=lista1.sort((a,b)=> (a-b))


const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){return arr.sort((a,b) =>arr.filter(v => v===a).length- arr.filter(v => v===b).length).pop();}

console.log(mode(NUMBERS));

//5