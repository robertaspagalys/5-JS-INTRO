/*
TERNARY OPERATOR: ? (klaustukas)
palyginimas ? ka daryti jei tenkina logika : ka daryti jei logikos netenkina
palyginimas ? true : false
*/

const a = 9;
const b = 7;

let ats = '';

if (a > b) {
    ats = 'daugiau';
} else {
    ats = 'ne daugiau';
}

console.log(ats);


const c = 9;
const d = 7;

const ats2 = c > d ? 'daugiau' : 'ne daugiau';

console.log(ats2);