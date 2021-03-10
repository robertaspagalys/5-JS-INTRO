console.log(123)
console.log("Labas")
console.log('rytas')
console.log('Lietuva')
console.log('Man yra 129 metai');

const vardas = 'Robertas';
console.log(vardas);

const hi = 'Laba diena 💯'
console.log(hi);

const pirmasSkaicius = 5
const antrasSkaicius = 5
const suma = pirmasSkaicius + antrasSkaicius;

console.log(pirmasSkaicius);
console.log(antrasSkaicius);
console.log(suma);

console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

const mathText = pirmasSkaicius + ' + ' + antrasSkaicius + ' = ' + suma;
console.log(mathText);

console.log('--------------');

const pertasName = 'Petras';
const age = 99;

const  petrasAge = pertasName + ' age is ' + age + '.'
console.log(petrasAge);

console.log('--------------');

// sarasas (array)
const pazymiai = [5, 7, 9, 3, 9, 8];
console.log(pazymiai);



const pirmasPazymys = pazymiai[0];
console.log(pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log(antrasPazymys);

const pazymiuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4] + pazymiai[5];

const pazymiuKiekis = pazymiai.length;

const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log('Pazymiu suma', pazymiuSuma);
console.log('Pazymiu kiekis', pazymiuKiekis);
console.log('Pazymiu vidurkis', pazymiuVidurkis);

console.log('-----------------------------');

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

// Is mums zinomos 6 raidziu abeceles paskutine raide yra "f".

const abcIlgis = abc.length;
const paskutineRaidesPozicija = abcIlgis - 1;
const paskutineRaide = abc[paskutineRaidesPozicija];
const abcAtsakymas = ' Is mums zinomos ' + abcIlgis + ' raidziu abeceles paskutine raide yra "' + paskutineRaide + '". ';
console.log(abcAtsakymas);







