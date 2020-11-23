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
console.log(sumWithVAT);


/*
2. Írj egy olyan függvénykifejezést, ami paraméterként kap egy tetszőleges típusú elemeket tartalmazó tömböt, és egy tetszőleges primitív értéket.! A függvény visszatérési értéke egy objektum, ami a következő propertyket tartalmazza:

exists: Értéke true/false attól függően, hogy a második paraméterként megadott érték megtalálható e a tömbben
index: Értéke egy szám, ha második paraméterként megadott érték megtalálható a tömbben, akkor a tömbben lévő indexe, hanem akkor -1 legyen az értéke
allElementIsANumber: Értéke true/false attól függően, hogy a tömb minden eleme number típusú e vagy sem
someElementIsANumber: Értéke true/false attól függően, hogy a tömbben van e number típusú elem vagy sem
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