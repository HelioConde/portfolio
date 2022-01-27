let nav2 = false;
let bar = 'null';
$('main').css({
    'top': '70px',
    'margin': 'auto',
    'width': '99%',
    'height': '88vh',
    'left': '0',
    'right': '0'
});
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
    if (valor <= 4) {
        navOn = 1;
        $("#nav2").css('display', 'inline-block')
        if (valor == 1 || valor == 3) {
            $("#nav2").css({
                'height': '70vh',
                'width': '70px',
                'top': '50%',
                'transform': 'translate(0, -50%)',
                'border-radius': '15px'
            })
        } else {
            $("#nav2").css({
                'height': '100vh',
                'width': '70px',
                'top': '50%',
                'transform': 'translate(0, -50%)',
                'border-radius': '0'
            })
        }
        if (valor == 1 || valor == 2) {
            $("#nav2").css({
                'left': $("#nav3 div:nth-child(" + valor + ")").css('left')
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
        } else {
            $("#nav2").css({
                'left': '',
                'right': $("#nav3 div:nth-child(" + valor + ")").css('right')
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
        }
    } else {
        navOn = 0;
        if (valor >= 7) {
            $("#nav").css({
                'top': $("#nav3 div:nth-child(" + valor + ")").offset().top + 'px',
                'left': '50%',
                'right': '50%',
                'width': '99.7%',
                'transform': 'translate(-50%, 0%)',
                'border-radius': '0'
            })
        } else {
            $("#nav").css({
                'top': $("#nav3 div:nth-child(" + valor + ")").offset().top + 'px',
                'left': '50%',
                'right': '50%',
                'width': '70%',
                'transform': 'translate(-50%, 0%)',
                'border-radius': '15px'
            })
        }
    }
    console.log(valor)
    if (valor == 1) {
        $('main').css({
            'bottom': '',
            'top': '50%',
            'margin': 'auto',
            'width': '87%',
            'height': '88vh',
            'left': '0%',
            'right': '0px',
            'transform': 'translate(0, -50%)'
        });
    } else if (valor == 2) {
        $('main').css({
            'bottom': '',
            'top': '0',
            'margin': '',
            'width': '93%',
            'height': '99vh',
            'left': '70px',
            'right': '0px',
            'transform': ''
        });
    } else if (valor == 3) {
        $('main').css({
            'bottom': '',
            'top': '50%',
            'margin': 'auto',
            'width': '87%',
            'height': '88vh',
            'left': '0%',
            'right': '0px',
            'transform': 'translate(0, -50%)'
        });
    } else if (valor == 4) {
        $('main').css({
            'bottom': '',
            'top': '0',
            'margin': '',
            'width': '93%',
            'height': '99vh',
            'right': '70px',
            'left': '0px',
            'transform': ''
        });
    } else if (valor == 5) {
        $('main').css({
            'bottom': '',
            'top': '50%',
            'margin': 'auto',
            'width': '87%',
            'height': '79vh',
            'left': '0%',
            'right': '0px',
            'transform': 'translate(0, -50%)'
        });
    } else if (valor == 6) {
        $('main').css({
            'bottom': '',
            'top': '50%',
            'margin': 'auto',
            'width': '87%',
            'height': '79vh',
            'left': '0%',
            'right': '0px',
            'transform': 'translate(0, -50%)'
        });
    } else if (valor == 7) {
        $('main').css({
            'bottom': '',
            'top': '70px',
            'margin': 'auto',
            'width': '99%',
            'height': '88vh',
            'left': '0',
            'right': '0',
            'transform': ''
        });
    } else if (valor == 8) {
        $('main').css({
            'top': '0',
            'bottom': '70px',
            'margin': 'auto',
            'width': '99%',
            'height': '88vh',
            'left': '0',
            'right': '0',
            'transform': ''
        });
    }
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
            $('main').animate({
                'left': '12%'
            }, 300);
        } else if (setBar == 2) {
            $('main').animate({
                'left': '250px'
            }, 300);
            $('main').css({
                'width': '77%'
            });
        } else if (setBar == 3) {
            $('main').css({
                'right': '12%'
            }, 300);
        } else if (setBar == 4) {
            $('main').animate({
                'right': '250px'
            }, 300);
            $('main').css({
                'width': '77%'
            });
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
                barPostion, '62px'
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
                $('main').css({
                    'left': '0%'
                }, 300);
            } else if (setBar == 2) {
                $('main').css({
                    'left': '70px'
                }, 300);
                $('main').css({
                    'width': '93%'
                });
            } else if (setBar == 3) {
                $('main').css({
                    'right': '0%'
                }, 300);
            } else if (setBar == 4) {
                $('main').css({
                    'right': '70px'
                }, 300);
                $('main').css({
                    'width': '93%'
                });
            }
        }, 500);


        $(".null_box2").css({
            'display': 'none',
        })
        $(".bar1").fadeOut(500)
    }
}