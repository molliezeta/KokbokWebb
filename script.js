//logging to console//
console.log("Hejhej");

let icon = document.getElementById("logo")
console.log(icon);

//1. "let" with reference to HTML id
//2. "addEventlistener" with "click" event
//3. change some CSS proportion of that 

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