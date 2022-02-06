let nav2 = false;
let bar = 'null';

let navOn = 0;
function setPos(e) {
    $("#nav3 div").css({
        'display': 'block'
    });

    if (navOn == 0) {
        $("#nav").css('display', 'flex')
        $("#nav").css("transform", "");
        $("#nav2").css("display", "none");

        $('#nav').css({
            'position': 'fixed',
            'cursor': 'move',
            'top': e.pageY - 25,
            'left': e.pageX - $('#nav').width() + 10,
            'border-radius': '15px',
            'width': '70%'
        });
    } else {
        $("#nav2").css('display', 'inline-block')
        $("#nav2").css("transform", "");
        $("#nav").css("display", "none");

        $('#nav2').css({
            'cursor': 'move',
            'top': e.pageY - $('#nav2').height() + 10,
            'left': e.pageX - 40,
        });
    }

    for (let i = 1; i < $("#nav3 div").length + 1; i++) {
        let filtro = 0
        if ($("#nav3 div:nth-child(" + i + ")").offset().top <= e.pageY) {
            filtro++;
            if ($("#nav3 div:nth-child(" + i + ")").offset().top + $("#nav3 div:nth-child(" + i + ")").height() >= e.pageY) {
                filtro++;
                if ($("#nav3 div:nth-child(" + i + ")").offset().left <= e.pageX) {
                    filtro++;
                    if ($("#nav3 div:nth-child(" + i + ")").offset().left + $("#nav3 div:nth-child(" + i + ")").width() >= e.pageX) {
                        filtro++;
                        navSet(i);
                    }
                }
            }
        }
    }
}

$(".null_box span").on('mousedown', function () {
    $(window).mousemove(setPos);
})
$(".null_box2 span").on('mousedown', function () {
    $(window).mousemove(setPos);
})
let setBar = '';
function navSet(valor) {
    setBar = valor;
    nav2 = true;
    chevronBar();
    console.log(valor);
    $(".grid1").css('padding', '0%')
    if (valor == 1) {
        $("#nav2").css('display', 'inline-block')
        navOn = 1;
        $("#nav2").css({
            'height': '70vh',
            'width': '70px',
            'top': '50%',
            'transform': 'translate(0, -50%)',
            'border-radius': '15px'
        })
        $("#nav2").css({
            'left': '5%'
        })
        $('#chevron2').css({
            'right': '',
            'left': '53px',
            'transform': 'scaleX(-1)'
        });
        $('.bar2, .bar1').css({
            'text-align': 'left',
            'float': 'left',
            'margin-left': '15px'
        });
        barPostion = 'left';

        $('main').css({
            'bottom': '',
            'top': '50%',
            'margin': '',
            'width': '89%',
            'height': '88vh',
            'left': '10%',
            'right': '0px',
            'transform': 'translate(0, -50%)'
        });
    } else if (valor == 2) {
        $("#nav2").css('display', 'inline-block')
        navOn = 1;
        $("#nav2").css({
            'height': '100vh',
            'width': '70px',
            'top': '50%',
            'transform': 'translate(0, -50%)',
            'border-radius': '0'
        })
        $("#nav2").css({
            'left': '0%'
        })
        $('#chevron2').css({
            'right': '',
            'left': '53px',
            'transform': 'scaleX(-1)'
        });
        $('.bar2, .bar1').css({
            'text-align': 'left',
            'float': 'left',
            'margin-left': '15px'
        });
        barPostion = 'left';
        $('main').css({
            'bottom': '',
            'top': '0',
            'margin': '',
            'width': '95%',
            'height': '99vh',
            'left': '70px',
            'right': '0px',
            'transform': ''
        });
    } else if (valor == 3) {
        $("#nav2").css('display', 'inline-block')
        navOn = 1;
        $("#nav2").css({
            'height': '70vh',
            'width': '70px',
            'top': '50%',
            'transform': 'translate(0, -50%)',
            'border-radius': '15px'
        })
        $("#nav2").css({
            'left': '',
            'right': '5%'
        })
        $('#chevron2').css({
            'left': '',
            'right': '53px',
            'transform': 'scaleX(1)'
        });
        $('.bar2, .bar1').css({
            'text-align': 'right',
            'float': 'right',
            'margin-right': '15px'
        });
        barPostion = 'right';
        $('main').css({
            'bottom': '',
            'top': '50%',
            'margin': '',
            'width': '89%',
            'height': '88vh',
            'left': 'auto',
            'right': '10%',
            'transform': 'translate(0, -50%)'
        });
    } else if (valor == 4) {
        $("#nav2").css('display', 'inline-block')
        navOn = 1;
        $("#nav2").css({
            'height': '100vh',
            'width': '70px',
            'top': '50%',
            'transform': 'translate(0, -50%)',
            'border-radius': '0'
        })
        $("#nav2").css({
            'left': '',
            'right': '0%'
        })
        $('#chevron2').css({
            'left': '',
            'right': '53px',
            'transform': 'scaleX(1)'
        });
        $('.bar2, .bar1').css({
            'text-align': 'right',
            'float': 'right',
            'margin-right': '15px'
        });
        barPostion = 'right';
        $('main').css({
            'bottom': '',
            'top': '0',
            'margin': '',
            'width': '95%',
            'height': '99vh',
            'right': '5%',
            'left': 'auto',
            'transform': ''
        });
    } else if (valor == 5) {
        navOn = 0;
        $('main').css({
            'bottom': '0',
            'top': '10%',
            'margin': 'auto',
            'width': '99%',
            'height': '88vh',
            'left': '0%',
            'right': '0%',
            'transform': ''
        });
        $("#nav").css({
            'top': $("#nav3 div:nth-child(" + valor + ")").offset().top + 'px',
            'left': '50%',
            'right': '50%',
            'width': '70%',
            'transform': 'translate(-50%, 0%)',
            'border-radius': '15px'
        })
    } else if (valor == 6) {
        navOn = 0;
        $('main').css({
            'top': '0',
            'bottom': '9%',
            'margin': 'auto',
            'width': '99%',
            'height': '88vh',
            'left': '0',
            'right': '0',
            'transform': ''
        });
        $("#nav").css({
            'top': $("#nav3 div:nth-child(" + valor + ")").offset().top + 'px',
            'left': '50%',
            'right': '50%',
            'width': '70%',
            'transform': 'translate(-50%, 0%)',
            'border-radius': '15px'
        })
    } else if (valor == 7) {
        navOn = 0;
        $('main').css({
            'bottom': '',
            'top': '1%',
            'margin': 'auto',
            'width': '99%',
            'height': '98vh',
            'left': '0',
            'right': '0',
            'transform': ''
        });
        $("#nav").css({
            'top': $("#nav3 div:nth-child(" + valor + ")").offset().top + 'px',
            'left': '50%',
            'right': '50%',
            'width': '99.7%',
            'transform': 'translate(-50%, 0%)',
            'border-radius': '0'
        })
    } else if (valor == 8) {
        navOn = 0;
        $('main').css({
            'top': '',
            'bottom': '1%',
            'margin': 'auto',
            'width': '99%',
            'height': '98vh',
            'left': '0',
            'right': '0',
            'transform': ''
        });
        $("#nav").css({
            'top': $("#nav3 div:nth-child(" + valor + ")").offset().top + 'px',
            'left': '50%',
            'right': '50%',
            'width': '99.7%',
            'transform': 'translate(-50%, 0%)',
            'border-radius': '0'
        })
    }
    console.log(valor)
}
var barPostion = 'left';
$(window).on('mouseup', function (e) {
    $(window).unbind('mousemove', setPos);
    $("#nav3 div").css({
        'display': 'none'
    });
})


$("#chevron2").on('mouseup', function () {
    chevronBar();
})
// controla a animação da barra de navegação e da pagina main //
function chevronBar() {
    if (nav2 == false) {
        $("#chevron2").css(
            barPostion, '233px'
        );
        $("#chevron2 i").css({
            'transform': 'scaleX(-1)'
        });
        $("#nav2").css({
            'width': '250px'
        });

        $(".bar2").css(
            'margin-' + barPostion, '35px'
        );
        if (setBar == 1) {
            $(".grid1").css('padding', '10%')
            console.log('teste 1')
            $('main').animate({
                'left': '10%'
            }, 300);
            $('main').css({
                'width': '89%'
            });
        } else if (setBar == 2) {
            $('main').css({
                'width': '82%'
            });
            $('main').animate({
                'left': '18%'
            }, 300);
        } else if (setBar == 3) {
            $(".grid1").css('padding', '10%')
            $('main').css({
                'width': '89%'
            });
            $('main').animate({
                'right': '10%'
            }, 300);
        } else if (setBar == 4) {
            $('main').animate({
                'right': '18%'
            }, 300);
            setTimeout(() => {
                $('main').css({
                    'width': '82%'
                });
            }, 300);

        }


        setTimeout(() => {
            $(".bar1").fadeIn(500)
        }, 500);
        $(".null_box2").css({
            'display': 'none',
        })
        setTimeout(() => {
            $(".null_box2").css({
                'width': '248px',
            });
            $(".null_box2").css({
                'display': 'inline-block',
            })
        }, 500);
        nav2 = true;
    } else {
        nav2 = false;
        setTimeout(() => {
            $("#chevron2").css(
                barPostion, '45px'
            );
            $("#chevron2 i").css({
                'transform': 'scaleX(1)'
            });
            $("#nav2").css({
                'width': '70px'
            });
            setTimeout(() => {
                $(".null_box2").css({
                    'width': '78px',
                });
                $(".null_box2").css({
                    'display': 'inline-block',
                })
                $(".bar2").css(
                    'margin-' + barPostion, '15px'
                );
            }, 500);
            if (setBar == 1) {
                $(".grid1").css('padding', '0%')
                $('main').css({
                    'left': '10%'
                }, 300);
                $('main').css({
                    'width': '89%'
                });
            } else if (setBar == 2) {
                $('main').css({
                    'left': '70px'
                }, 300);
                $('main').css({
                    'width': '95%'
                });
            } else if (setBar == 3) {
                $(".grid1").css('padding', '0%')
                $('main').css({
                    'width': '89%'
                });
                $('main').css({
                    'right': '10%'
                }, 300);
            } else if (setBar == 4) {
                $('main').css({
                    'right': '5%'
                }, 300);
                $('main').css({
                    'width': '95%'
                });
            }
        }, 500);


        $(".null_box2").css({
            'display': 'none',
        })
        $(".bar1").fadeOut(500)
    }
}

// Mobile //
var mobileBar = false;
$("#barHover").on('mouseup', function () {
    if ($(window).width() < '600') {
        showMobileBar(mobileBar);
    }
})
function showMobileBar(valor) {
    if (valor == false) {
        $(".barActive").show(1000);
        mobileBar = true;
    } else {
        $(".barActive").hide(1000);
        mobileBar = false;
    }
}

$(window).on('mousemove', function () {
    if ($(window).width() > '600') {
        $(".barActive").css('display', 'flex');
        mobileBar = true;
    }
})