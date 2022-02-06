// controla o movimento do background na pagina contato //
$("#background2 div:nth-child(1)").css({ 'left': '0px' })
$("#background2 div:nth-child(2)").css({ 'left': '0px' })
$("#background2 div:nth-child(3)").css({ 'left': '0px' })
$(window).on('mousemove', function (e) {
    var screenX = $(window).width() / 12;
    var xPosition = e.originalEvent.x / 12;
    var xP = -Math.abs(xPosition) - screenX + 200;
    var xP2 = Math.abs(xPosition) - screenX + 200;
    $("#background2 div:nth-child(1)").css({ 'left': xP2 / 4 + 'px' })
    $("#background2 div:nth-child(2)").css({ 'left': xP / 6 + 'px' })
    $("#background2 div:nth-child(3)").css({ 'left': xP + 'px' })
    $("#background3 div:nth-child(1)").css({ 'left': xP2 + 60 + 'px' })
    $("#background3 div:nth-child(2)").css({ 'left': xP / 4 - 150 + 'px' })
    $("#background3 div:nth-child(3)").css({ 'left': xP2 / 2 + 100 + 'px' })
    
    $("#background4 div:nth-child(1)").css({ 'left': xP2 + 60 + 'px' })
    $("#background4 div:nth-child(2)").css({ 'left': xP / 4 - 150 + 'px' })
    $("#background4 div:nth-child(3)").css({ 'left': xP2 / 2 + 100 + 'px' })
})