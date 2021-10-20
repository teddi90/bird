$(document).ready(function () {
    $(".nav__toggle").click(function () {
        $(this).toggleClass("nav__toggle-on");
        $(".nav__menu").toggleClass("nav__menu-active");
    });

    $(".nav__menu").children().click(function () {
        $(".nav__menu").removeClass("nav__menu-active");
        $(".nav__toggle").removeClass("nav__toggle-on");
    });


    $(".nav__menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        if (parseInt($(window).width()) < 768) {
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top - 48;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        }
        else var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });


    $('.works__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    $(".experience__slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
});
