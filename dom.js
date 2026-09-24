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
var head = document.querySelector('.box1');

var flg = 0

btn.addEventListener('click', function () {
    if (flg == 0) {

        head.innerHTML = 'Sending....'
        head.style.color = 'skyblue'
        btn.innerHTML = 'Request Now'

        setTimeout(function () {
            head.innerHTML = 'Friends....'
            head.style.color = 'red'
            btn.innerHTML = 'Remove Now'
            flg = 1
        }, 3000)
    } 

    }
});