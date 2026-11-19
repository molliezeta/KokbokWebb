
//Bilder som länkar//
const Frukost =document.getElementById('Frukost-bild')

Frukost.addEventListener('click', function () {
    window.location.href = 'frukost.html'
})

const Lunch = document.getElementById('Lunch-bild')
Lunch.addEventListener('click', function () {
    window.location.href = 'lunch.html'
})

const Middag = document.getElementById('Middag-bild')
Middag.addEventListener('click', function () {
    window.location.href = 'middag.html'
})

//Frukostknapp//
const knapp = document.getElementById('knapp');

const texter = [
    'Pannkakssmet',
    'Frukostpaj med äpple',
    'Fransk omelett med ost',
    'Omelett med avokado'
];

knapp.addEventListener('click', function () {
    const slumpIndex = Math.floor(Math.random() * texter.length);
    knapp.textContent = texter[slumpIndex];
});

//Lunchknapp//
const generera2 = document.getElementById('knapp2')

const lunchtexter = [
    'Laxpasta med lime',
    'Korv Stroganoff',
    'Enkel tomatsoppa med grädde',
    'Svamppasta',
    'Couscoussallad med vegobullar och picklad rödlök'
];

generera2.addEventListener('click', function () {
    const slumpLunch = Math.floor(Math.random() * lunchtexter.length);
    generera2.textContent = lunchtexter[slumpLunch]    
})

//Middagsknapp//
const generera3 = document.getElementById('knapp3')

const middagstexter = [
    'Bouillabaisse',
    'Marry me chicken',
    'Harissakyckling med saffransris',
    'Kyckling med röd curry',
    'Asiatisk röd curry med räkor'
];

generera3.addEventListener('click', function () {
    const slumpMiddag = Math.floor(Math.random() * middagstexter.length);
    generera3.textContent = middagstexter[slumpMiddag]
})