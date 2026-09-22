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
var photo = document.querySelector('#photo');
var head1 = document.querySelector('.head1');

var photos = [
    "1.jpeg",
    "2.jpeg",
    "3.png",
    "5.png",
    "4.png"
];

var headings = [
    "Maybe this guy?",
    "They had so much big, I can't handle this 😭💦",
    "What was your size? 🤔",
    "This guy will be perfect for my last year 👹😈",
    "They had small 😂 but good for time pass 😏",
];

var count = 0;

btn.addEventListener('click', function () {

    count++;

    if (count >= photos.length) {
        count = 0;
    }

    photo.src = photos[count];
    head1.textContent = headings[count];

});