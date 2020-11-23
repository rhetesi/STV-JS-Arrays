'use strict';

/*
1. Írj egy olyan függvény kifejezést, ami paraméterként vár egy egész számokat tartalmazó tömböt! (Input ellenőrzést nem kell végezni.)
A függvény szorozza meg tömbelemek értékét 1.27-el, majd pedig térjen vissza az elemek összegével!
*/

const intArray = [100, 150, 234, 515, 627];

/*const taxedArray = intArray.map(item => item * 1.27);
console.log(taxedArray);
const taxedSum = taxedArray.reduce((previous, current) => previous + current);
console.log(taxedSum);*/

const sumWithVAT = intArray.map(item => item * 1.27).reduce((prev, curr) => prev + curr);
console.log('1. feladat - tömb eleminek szorzása meagadott értékkel és a szorzatok összeadása: ' + sumWithVAT);


/*
2. Írj egy olyan függvénykifejezést, ami paraméterként kap egy tetszőleges típusú elemeket tartalmazó tömböt, és egy tetszőleges primitív értéket.! A függvény visszatérési értéke egy objektum, ami a következő propertyket tartalmazza:

exists: Értéke true/false attól függően, hogy a második paraméterként megadott érték megtalálható e a tömbben
index: Értéke egy szám, ha második paraméterként megadott érték megtalálható a tömbben, akkor a tömbben lévő indexe, hanem akkor -1 legyen az értéke
allElementIsANumber: Értéke true/false attól függően, hogy a tömb minden eleme number típusú e vagy sem
someElementIsANumber: Értéke true/false attól függően, hogy a tömbben van e number típusú elem vagy sem
*/

// Final run (maybe sprint?), it works properly.
const objectForArrayMethods = {};
const arrayForArrayMethods = [100, 150, 234, 'valami', 515, 627, false];
let valueA = 234, valueB = 'valaki';

const arrayMethods = (object, arr, prim) => {
   object.exists = arr.some(item => item === prim);
   object.index = arr.findIndex(item => item === prim);
   object.allElementIsANumber = arr.every(item => item === typeof('number'));
   object.someElementIsANumber = arr.some(item => item !== isNaN);
   
   return object;
}

console.log(arrayMethods(objectForArrayMethods, arrayForArrayMethods, valueA));
console.log(arrayMethods(objectForArrayMethods, arrayForArrayMethods, valueB));

/* 2nd run (with some development, and rather 22nd than 2nd :) )
const arrMethod = [100, 150, 234, 'valami', 515, 627];
const valueA = 150, valueB = 'valaki';

const exists = (arr, prim) => arr.some(item => item === prim);
const index = (arr, prim) => arr.findIndex(item => item === prim);
const allIsNum = (arr) => arr.every(item => item === typeof('number'));
const someNum = (arr) => arr.some(item => item !== isNaN);

console.log(exists(arrMethod, valueA));
console.log(index(arrMethod, valueA));
console.log(index(arrMethod, valueB));
console.log(allIsNum(arrMethod, valueA));
console.log(someNum(arrMethod, valueA));
*/

/* 1. nekifutás (már ez is egy átírt változat, ÍGY JÁR, AKI CODEPEN-t használ.)
const arrMethod = [100, 150, 234, 'valami', 515, 627];
const valueA = 150, valueB = 'valaki';

// find()
const findResultA = intArray.find(item => item === valueA);
//console.log(findResultA);
const findResultB = intArray.find(item => item === valueB);
//console.log(findResultB);


// findIndex()
const findIResultA = intArray.findIndex(item => item === valueA);
//console.log(findIResultA);
const findIResultB = intArray.findIndex(item => item === valueB);
//console.log(findIResultB);


// every()
const everyResultA = intArray.every(item => item === valueA);
//console.log(everyResultA);
const everyResultB = intArray.every(item => item === valueB);
//console.log(everyResultB);


// some()
const someResultA = intArray.some(item => item === valueA);
//console.log(someResultA);
const someResultB = intArray.some(item => item === valueB);
//console.log(someResultB);
*/


/* 3. Írj egy olyan függvénykifejezést, ami paraméterként egy stringeket tartalmazó tömböt kap  (Input ellenőrzést nem kell végezni.), és visszaad egy html template-et (string)! A html template egy felsorolt lista, aminek a listaelemei a kapott tömb értékeit tartalmazzák.
Pl.:

// ha ez a tömb
const content = ['első', 'második', 'harmadik'];

// akkor ez legyen a visszatérési érték:
<ul>
    <li>első</li>
    <li>második</li>
    <li>harmadik</li>
</ul> */

const content = ['első', 'második', 'hamadik'];
let list = '';

const htmlList = (arr) => {
    const tempList = '<ul>,' + arr.map(item => '  <li>' + item + '</li>') + ',</ul>'; // 2 szóköz az indentáláshoz a nyitó <li> előtt
    list = tempList.replaceAll(',','\r\n'); // Vesszők helyett a CRLF vezérlőkarakterek
    return list;
}

console.log(htmlList(content));

//const HTMLList = '<ul>' + stringArray.map(item => '<li>' + item + '</li>') + '</ul>';
//const listItem = stringArray.map(item => '<li>' + item + '</li>');
//const HTMLList = listItem.replace(',', '');
//console.log(HTMLList);