$(function() {
    const tabs = $('.tabs'); //header hissesinde olanlari sec
    const content = $('.content'); //sec
    $(content).hide() //hamisini disp:none ele
    $(content[0]).show() //1cisine block ele default ucun 

    tabs.on('click', '.tabs-title', function() { //ul-de eger click elesem li ucun event ele
        //hansina click elemisemse ona active ele 
        $('.active').removeClass('active'); //umumi butun aktivleri sil
        $(this).addClass('active')
        $(content).hide() //contentlerin hamsini gizle
        $(content[$(this).index()]).css('display', 'block') //secdiyim indexine uygun olan contente blockeleva ele 
    })

})