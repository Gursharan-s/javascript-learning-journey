// var h = document.querySelector('h1');

// h.innerHTML = 'kidia bai'

// h.style = 'pink'
// h.style.backgroundColor = 'yellow'

// h.addEventListener('click' ,function (){
//     console.log("oaaaa ");

// })
// var btn = document.querySelector('button');
// var bo = document.querySelector('#box');

// btn.addEventListener('click', function () {
//     var y1 = Math.floor(Math.random() * 256);
//     var y2 = Math.floor(Math.random() * 256);
//     var y3 = Math.floor(Math.random() * 256);

//     bo.style.backgroundColor = `rgb(${y1} , ${y2} , ${y3})`
// })
var btn = document.querySelector('button');
var photos = document.querySelector('#photo');
var head2 = document.querySelector('#head2');
var photos = [
    "1.jpeg",
    "2.jpeg",
    "3.png",
    "5.png",
    "4.png"
];

var head2 = [
    "Maybe this guy?",
    "They had so much i can't handle this 💦",
    "What was your size",
    "This guy will perfect for my last year 😈",
    "They had  small but good for time pass 😏"
]

var count = 0;

btn.addEventListener('click', function () {

    count++;

    if (count >= photo.length) {
        count = 0;
    }

    photo.src = photos[count];
    head2.textContent = headings[count];

});