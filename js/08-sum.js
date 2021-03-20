/*Suskaičiuot ką gausime susumavus skaičius intervale tarp (imtinai)

Suma intervale nuo 0 iki 4 yra 10.


0 - 4           = 10
0 - 100         = 5050
574 - 815       = didelis skaic
-50 - 50        = 0
-70 - 30        = didelis neig skaic
0 - 0           = 0

*/

const nuo = -50;
const iki = 50;
let suma = 0;

if (nuo <= iki) {
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
} else {
    for (let i = iki; i <= nuo; i++) {
        suma += i;
    }
}

//const ats = 'Intervale nuo ' + nuo + ' iki ' + iki + ' suma yra ' + suma + '.';//
const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`;
console.log(ats);