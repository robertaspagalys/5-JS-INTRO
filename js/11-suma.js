const a = 8;
const b = 5;
const c = 99;
const d = 88;
const e = 5425;
const f = 8523;

//const s = (a + b) * 10;
//console.log(s);

function desimteriopaSuma (pirmas, antras) {
    const s = (pirmas + antras) * 10;
    console.log(s);
}
desimteriopaSuma(a, b);
console.log('-------');
desimteriopaSuma(c, d);
console.log('-------');
desimteriopaSuma(e, f);

function labas(vardas, amzius, vieta) {
    console.log(`Labas, esu ${vardas} ir man yra ${amzius} metai ir gyvenu ${vieta}.`);
}

labas('Petras', 55, 'Lietuvoje');
labas('Nijole', 77, 'Wilno');
labas('Srekas', 103, 'swamp');

