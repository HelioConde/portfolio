let count = 0;
var blur = true;

ms = 30; // 1000 ?
num = 1;
start = new Date();
log = 6000;

function timer() {
    num += ms;
    if (num < log) {
        window.setTimeout(timer, ms);
    } else {
        log = log + 6000;
        countDown();
    }
}


function countDown() {
    if (blur == true) {
        blur = false
        if (count == 0) {
            $(".grid1").css({ display: 'grid' }, 2000);
            $(".grid1").animate({ opacity: '1' }, 2000);
            count++;
        } else if (count == 1) {
            $(".html5").fadeIn(2000);
            count++;
        } else if (count == 2) {
            $(".css").fadeIn(2000);
            count++;
        } else if (count == 3) {
            $(".javaScript").fadeIn(2000);
            count++;
        } else if (count == 4) {
            $(".frontEnd").fadeIn(2000);
            count = 0;
        }
        start2 = new Date();
        dueTo = new Date(+new Date() + 6000);
        ms2 = 30; // 1000 ?
        num2 = 1;
        timer();
        setTimeout(() => {
            clear();
        }, 4000);
    }
}

function clear() {
    $(".grid1").fadeOut(2000);
    $(".grid1").animate({ opacity: '0' }, 2000);
    $(".html5").fadeOut(2000);
    $(".css").fadeOut(2000);
    $(".javaScript").fadeOut(2000);
    $(".frontEnd").fadeOut(2000);
    blur = true;
}

function clear2() {
    $(".grid1").fadeOut(0);
    $(".html5").fadeOut(0);
    $(".css").fadeOut(0);
    $(".javaScript").fadeOut(0);
    $(".frontEnd").fadeOut(0);
}
