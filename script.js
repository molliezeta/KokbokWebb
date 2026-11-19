
//Bilder som länkar//
const Frukost =document.getElementById('Frukost-bild') /*hittar elementet utifrån id*/

Frukost.addEventListener('click', function () {
    window.location.href = 'frukost.html'
}) /*när elementet klickas på, kommer man till relaterande sida*/

const Lunch = document.getElementById('Lunch-bild')
Lunch.addEventListener('click', function () {
    window.location.href = 'lunch.html'
})

const Middag = document.getElementById('Middag-bild')
Middag.addEventListener('click', function () {
    window.location.href = 'middag.html'
})

//Frukostknapp//
const knapp = document.getElementById('knapp'); /*hittar elementet efter id*/

const texter = [
    'Pannkakssmet',
    'Frukostpaj med äpple',
    'Fransk omelett med ost',
    'Omelett med avokado'
]; /*anger vilka texter som ska växlas mellan när man trycker på knappen*/

knapp.addEventListener('click', function () {
    const slumpIndex = Math.floor(Math.random() * texter.length);
    knapp.textContent = texter[slumpIndex];
});/*säger: när knappen klickas på, slumpas text fram utifrån listan(texter)*/
/*math: javascript väljer slumpmässigt utifrån listan*/

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

