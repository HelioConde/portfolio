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

// click para trocar de pagina //
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

// deixa as paginas visivel e controla o background //
function navSend(valor) {
    if ($(window).width() < '600') {
        showMobileBar(true);
    }
    if (animBlock == false) {
        namePage = valor;
        $("#home").css({ display: 'none' });
        $("#sobre").css({ display: 'none' });
        $("#projetos").css({ display: 'none' });
        $("#contato").css({ display: 'none' });

        if (animBlock == false) {
            $("#home").fadeOut(1000);
            $("#sobre").fadeOut(1000);
            $("#projetos").fadeOut(1000);
            $("#contato").fadeOut(1000);
            loop(false);
            $("#background").animate({
                'opacity': "0"
            }, 2000)
            $("#background3").fadeOut(1000);
            $("#background2").fadeOut(1000);
            setTimeout(() => {
                $('.background').attr('id', '');
                $(".background div").css({ 'left': '' })
            }, 1000);
            for (var i = 1; i < 5; i++) {
                $("#nav div ul li:nth-child(" + i + ") span").css({ 'border-bottom': '' });
            }
            animBlock = true;
            setTimeout(() => {
                localStorage.setItem('page', namePage);
                $("#" + namePage + "").fadeIn(2000);
                if (namePage == 'home') {
                    if ($(window).width() > '600') {
                        $("#background").css({
                            'background': "",
                            'background-size': '100% 100vh'
                        })
                    } else {
                        $("#background").css({
                            'background': "",
                            'background-size': 'auto 100vh'
                        })
                    }
                    $("#nav div ul li:nth-child(1) span").css({ 'border-bottom': '2px solid white' });
                    $("#background").animate({
                        'opacity': "1"
                    })
                    countDown();
                } else if (namePage == 'sobre') {
                    $('.background').attr('id', 'background4');
                    if ($(window).width() > '600') {
                        $("#background4").fadeIn(1000)
                    } else {
                        $("#background4").css({
                            'width': '1380px',
                            'height': '720px'
                        })
                        $("#background4").fadeIn(1000)
                    }
                    $("#nav div ul li:nth-child(2) span").css({ 'border-bottom': '2px solid white' });
                    $("#background").animate({
                        'opacity': "1"
                    }, 2000)
                    loop(true);
                } else if (namePage == 'projetos') {
                    $('.background').attr('id', 'background3');
                    if ($(window).width() > '600') {
                        $("#background3").fadeIn(1000)
                    } else {
                        $("#background3").css({
                            'width': '1380px',
                            'height': '720px'
                        })
                        $("#background3").fadeIn(1000)
                    }
                    $("#nav div ul li:nth-child(3) span").css({ 'border-bottom': '2px solid white' });
                    $("#background").animate({
                        'opacity': "1"
                    }, 2000)
                } else if (namePage == 'contato') {
                    $('.background').attr('id', 'background2');
                    $("#nav div ul li:nth-child(4) span").css({ 'border-bottom': '2px solid white' });
                    if ($(window).width() > '600') {
                        $("#background2").fadeIn(1000)
                    } else {
                        $("#background2").css({
                            'width': '1380px',
                            'height': '720px'
                        })
                        $("#background2").fadeIn(1000)

                    }

                }
                setTimeout(() => {
                    animBlock = false;
                }, 1000);
            }, 1000);
        }
    }
}

// loop de animação //
var looping = '1';
function loop(valor) {
    if (valor == true) {
        setTimeout(() => {
            $(".box p:nth-child(" + looping + ")").animate({
                'margin-left': '0',
                'opacity': '1'
            });
            if (looping > 6) {
                looping = '1';
            } else {
                looping++;
                loop(true);
            }
        }, 1000);
    } else {
        $(".box p:nth-child(" + looping + ")").animate({
            'margin-left': '-100%',
            'opacity': '0'
        });
        if (looping > 6) {
            looping = '1';
        } else {
            looping++;
            loop(false);
        }
    }
}
if (localStorage.getItem('page') == null) {
    $("#home").css({ display: 'flex' });
    countDown();
} else {
    navSend(localStorage.getItem('page'));
}

// controla a animação carrosel grid //
function countDown() {
    if (navPage == 0) {
        if (blur == true) {
            blur = false
            if (count == 0) {
                if ($(window).width() < '600') {
                    $(".grid1").css({ display: 'block' }, 2000);
                    $(".grid1").animate({ opacity: '1' }, 2000);
                } else {
                    $(".grid1").css({ display: 'grid' }, 2000);
                    $(".grid1").animate({ opacity: '1' }, 2000);
                }
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

// limpa o carrosel //
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
