/*
Funkcija pavadinimu “didziausiasSkaiciusSarase”:
A. priima vieną kintamąjį
B. jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
C. jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
D. priešingu atveju, funkcija tęsia darbą
E. pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
F. gražina didžiausią surastą skaičių
*/

  
function bigNum(list) {
    // input validation
    if (!Array.isArray(list)) {
        return 'ERROR: netinkamas tipas, turi buti array (sarasas)';
    }
    if (list.length === 0) {
        return 'ERROR: array is empty';
    }

    // logic
    let biggest = list[0];

    for (let i = 1; i < list.length; i++) {
        const number = list[i];
        if (number > biggest) {
            biggest = number;
        }
    }

    // result
    return biggest;
}

// console.log(bigNum('pomidoras'));
// console.log(bigNum(484562));
// console.log(bigNum(true));
// console.log(bigNum(false));
// console.log(bigNum(undefined));
// console.log(bigNum());
// console.log(bigNum(bigNum));
// console.log(bigNum(null));
// console.log(bigNum({}));
// console.log(bigNum([]));

console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([-11, -2, -35, -4, -5, -6, -7, -8]), '->', -2);
