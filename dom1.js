var btn = document.querySelector('button');
var per = document.querySelector('.sec');
var lin = document.querySelector('.line1');
var sta = document.querySelector('.fir');
var grow = 0;

btn.addEventListener('click', function () {
    var int = setInterval(function() {
        grow++
        per.innerHTML = grow + '%'
        lin.style.width = grow + '%'
    }, 50);


    setTimeout(function () {
        clearInterval(int)
        btn.innerHTML = 'Downloading'
        sta.innerHTML = 'Done..'
    }, 5000)

})
