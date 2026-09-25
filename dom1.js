var btn = document.querySelector('button');
var per = document.querySelector('.sec');
var lin = document.querySelector('.line');
var sta = document.querySelector('.fir');

var flg = 0;

btn.addEventListener('click', function () {
    if (flg == 0) {
        sta.innerHTML = 'Completed..'
        btn.innerHTML = 'Done'

        setTimeout(function () {
            setInterval(() => {
                
            }, interval);
            flg = 1
        }, 100)
    }
    else {
        flg = 0
        sta.innerHTML = 'Started..'
        btn.innerHTML = 'Downloading'
    }
})
