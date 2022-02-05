$(window).on('mousemove', function (e) {
    var screenX = $(window).width() / 12;
    var xPosition = e.originalEvent.x / 12;
    var xP = -Math.abs(xPosition) - screenX + 200;
    var xP2 = Math.abs(xPosition) - screenX + 200;
    $("#background2 div:nth-child(1)").css({ 'left': xP2 / 4 + 'px' })
    $("#background2 div:nth-child(2)").css({ 'left': xP / 6 + 'px' })
    $("#background2 div:nth-child(3)").css({ 'left': xP + 'px' })
})