$(function() {
    //active vermekcun headere
    const tabs = $('.tabs');
    const content = $('.tabs-content--item');
    tabs.on('click', '.tabs-title', function() {
            $('.active').removeClass('active'); //umumi butun aktivleri sil
            $(this).addClass('active')
        })
        /* ========================================================================================= */

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();
        //hara gedeceyi ucun animation vermekcun 
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        //tikladigimiz dive style vermek ucun 
        $(content).attr('style', '')
        let localStorageTheme = localStorage.getItem('theme');
        if (localStorageTheme == 'enabled') {
            $(content[$(this).parent().index()]).css({ "background-color": "red", 'font-size': '18px' })
        } else {
            $(content[$(this).parent().index()]).css({ "background-color": "yellow", 'font-size': '18px' })
        }
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > content.height()) { //birinci contenti kecenden sora UP cixsin
            $('#toTop').fadeIn(); //opacityni 1 elesein
        } else {
            $('#toTop').fadeOut(); //opacityni 0 elesein ,YENI itsin 
        }
    });
    //click edende yuxari get
    $('#toTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });
    //ve click edende toogle olmaqcun
    $('#btn').click(function() {
        $('#btn').prev().toggle({
            duration: 1000,
            specialEasing: {
                width: "easeOutElastic",
                height: "easeInBounce",
            }
        });
    });
})