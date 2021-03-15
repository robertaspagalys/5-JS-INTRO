/*

SWITCH STATEMENT:

swich () {case, break, default}
*/

const animal = 'cat';

switch (animal) {
    case 'dog':
        console.log('woof woof');
        break;

    case 'cat':
        console.log('meow meow');
        break;

    default:
        console.log('unknown animal');
        break;
}

if (animal === 'dog') {
    console.log('woof woof');

} else if (animal === 'cat') {
    console.log('meow meow');

} else {
    console.log('unknow animal');
}

console.log('-------------------');


const day = 7;

switch (day) {
    case 1:
        console.log('pirmad');
        break;

    case 2:
        console.log('antad');
        break;

    case 3:
        console.log('treciad');
        break;

    case 4:
        console.log('ketv');
        break;

    case 5:
        console.log('penktd');
        break;

    case 6:
        console.log('sestad');
        break;

    case 7:
        console.log('sekmdn');
        break;

    default:
        console.log('Tokia diena savaiteje neegzistuoja');
}

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalio diena');
        break;

    default:
        console.log('Tokia diena savaiteje neegzistuoja');
}

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    console.log('darbo diena');
} else if (day === 6 || day === 7) {
    console.log('savaitgalio diena');
} else {
    console.log('Tokia diena savaiteje neegzistuoja');
}

switch (day) {
    case 1:
    case 3:
    case 5:
    case 7:
        console.log('nelygine diena');
        break;

    case 2:
    case 4:
    case 6:
        console.log('lygine diena');
        break;

    default:
        console.log('Tokia diena savaiteje neegzistuoja');
}

console.log('--------------');

const process = 9;

switch (process) {
    case 1:
        console.log('paimti puodeli');
    case 2:
        console.log('isideti arbatos');
    case 3:
        console.log('isideti cukraus');
    case 4:
        console.log('ipilti vandens');
    case 5:
        console.log('ismaisyti');
    case 6:
        console.log('gerti');
        break;

    default:
        console.log('Viskas sekmingai atlikta 😊');
}