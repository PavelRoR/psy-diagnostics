$(document).ready(function() {
    /* Якорь */
    $("a[href^='#']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    // Мобильное меню
    var mobMenu = $('.mobile-menu'),
    headNav = $('.header-menu'),
    mml1 = $('.mobile-menu-line-1'),
    mml2 = $('.mobile-menu-line-2'),
    mml3 = $('.mobile-menu-line-3');

mobMenu.on('click', function () {
    if (!headNav.hasClass('nav-active')) {
        mobMenu.addClass('fixed');
        headNav.addClass('nav-active');
        mml1.addClass('switched');
        mml2.addClass('switched');
        mml3.addClass('switched');
    } else {
        mobMenu.removeClass('fixed');
        headNav.removeClass('nav-active');
        mml1.removeClass('switched');
        mml2.removeClass('switched');
        mml3.removeClass('switched');
        $('.header-menu li a').click(function(){
            mobMenu.removeClass('fixed');
            headNav.removeClass('nav-active');
            mml1.removeClass('switched');
            mml2.removeClass('switched');
            mml3.removeClass('switched');
        })
    }
});


/*Конец документа*/
});