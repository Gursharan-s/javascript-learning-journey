var btn = document.querySelector('button');
var per = document.querySelector('.sec');
var lin = document.querySelector('.lin1');
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
        btn.style.backgroundColor = '#90ee90'
    }, 5000)

})
