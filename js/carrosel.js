let count = 0;
var blur = true;

ms = 30; // 1000 ?
num = 1;
start = new Date();
log = 6000;

// Timer loop functuin //

function timer() {
    num += ms;
    if (num < log) {
        window.setTimeout(timer, ms);
    } else {
        log = log + 6000;
        countDown();
    }
}

var navPage = 0;
var namePage = 'home';
var animBlock = false;
$("#barRight").on('mouseup', function () {
    if (animBlock == false) {
        if (namePage == 'home') {
            namePage = 'sobre';
        } else if (namePage == 'sobre') {
            namePage = 'projetos';
        } else if (namePage == 'projetos') {
            namePage = 'contato';
        } else if (namePage == 'contato') {
            namePage = 'home';
        }
        navSend(namePage);
    }
})

$("#barLeft").on('mouseup', function () {
    if (animBlock == false) {
        if (namePage == 'home') {
            namePage = 'contato';
        } else if (namePage == 'sobre') {
            namePage = 'home';
        } else if (namePage == 'projetos') {
            namePage = 'sobre';
        } else if (namePage == 'contato') {
            namePage = 'projetos';
        }
        navSend(namePage);
    }
})

function navSend(valor) {
    if (animBlock == false) {
        namePage = valor;
        console.log(valor);
        $("#home").css({ display: 'none' });
        $("#sobre").css({ display: 'none' });
        $("#projetos").css({ display: 'none' });
        $("#contato").css({ display: 'none' });
        if (animBlock == false) {
            $("#home").fadeOut(1000);
            $("#sobre").fadeOut(1000);
            $("#projetos").fadeOut(1000);
            $("#contato").fadeOut(1000);
            console.log(valor);

            animBlock = true;
            setTimeout(() => {
                $("#" + namePage + "").fadeIn(2000);
                if (namePage == 'sobre') {
                    loop()
                    var looping = '1';
                    function loop() {
                        setTimeout(() => {

                            $(".box p:nth-child(" + looping + ")").animate({
                                'margin-left': '0',
                                'opacity': '1'
                            });
                            if (looping > 6) {
                            } else {
                                looping++;
                                loop();
                            }
                        }, 1000);
                    }
                }
                setTimeout(() => {
                    animBlock = false;
                }, 1000);
            }, 1000);
        }
    }
}

$("#contato").css({ display: 'flex' });
countDown();

function countDown() {
    if (navPage == 0) {
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