$(function(){


    $('.top__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
    });


    $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('menu__btn--active')
        $('.menu').toggleClass('menu--active')
        
        
    });


});