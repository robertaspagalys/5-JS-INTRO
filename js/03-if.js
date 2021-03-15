/*
IF STATEMENT:

Logikos sablonai
if () {}
if () {} else {}
if () {} else if {} else {}

palyginimo operatoriai:
-visi: >, <, >=, <=, ==, !=, ===, !==, !
-naudotini:>, <, >=, <=, ===, !==, !
nenaudotini:==, != (nes nera tikrinamas kintamuju tipas)
*/

const a = 8;
const b = 4;

if(a > b) {
    const ats = `${a}  yra daugiau uz  ${b}`;
    console.log(ats)
}

console.log('-----------------------');

const c = 6;
const d = 4;

if (c < d) {
    const cdMaziau = `${c} yra maziau uz ${d}`;
    console.log(cdMaziau);
} else {
    const cdNeMaziau = `${c} yra NE maziau uz ${d}`;
    console.log(cdNeMaziau);
}

console.log('-----------------------------')

const e = 8;
const f = 9;

if (e > f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

console.log('------------------------------');

const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log('Ismetame cookies sutikimo bloka...1');
}
if (!cookiesAgreed) {
    console.log('Ismetame cookies sutikimo bloka...2');
}

console.log('--------------------');

const userLoggedIn = true;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}

console.log('--------------------');

const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;
console.log(pomidoroIlgis);

console.log('--------------------');

const akys = 'Zalios'

if (akys === 'Melynos') {
    console.log('Blue🔵');
} else if (akys === 'Zalios') {
    console.log('Green🟢');
} else if (akys === 'Rudos') {
    console.log('Brown🟤');
} else if (akys === 'Pilkos') {
    console.log('Grey🔘');
} else {
    console.log('Kontaktiniai lesiai🔴');
}

