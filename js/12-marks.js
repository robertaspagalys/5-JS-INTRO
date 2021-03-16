function pazymiuVidurkis(vardas, pazymiai) {
    let suma = 0;

    for (let i = 0; i < pazymiai.length; i++) {
     suma += pazymiai[i];
}

const average = suma / pazymiai.length;

// Vardas: pazymiu vidurkis yra 6.
console.log(`${vardas}: pazymiu vidurkis yra ${average}.`);
}

//pazymiuVidurkis('Petras', [10, 2, 8, 4]);
//pazymiuVidurkis('Nijole', [10, 8, 6, 4]);
//pazymiuVidurkis('Srekas', [10, 9, 10, 7]);

const mokykla = [
    ['Petras', [10, 2, 8, 4]],
    ['Nijole', [10, 8, 6, 4]],
    ['Srekas', [10, 9, 10, 7]]
];

//console.log(mokykla);

for (let i = 0; i < mokykla.length; i++) {
    console.log('----------------');
    const mokinys = mokykla[i];
    const name = mokinys[0];
    const marks = mokinys[1];

    pazymiuVidurkis(name, marks)
    pazymiuVidurkis(mokykla[i][0], mokykla[i][1]);
}