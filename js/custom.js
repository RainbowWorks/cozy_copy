$(function () {
    const MMS = new Swiper('.main_menu_slide', {/*옵션입력*/
        loop: true,
        slidesPerView: 4, /*swiperjs에서 받아왔음*/
        spaceBetween: 80, /*swiperjs에서 받아왔음*/
        autoplay: {
            delay: 0, /*0이면 머무르는 시간이 0초*/
            disableOnInteraction: false,
        }, /*swiperjs에서 받아왔음*/

        speed: 5000, /*2500은 2.5초이다*/
    });

    const MIS = new Swiper('.main_interior_slide', {
        loop: true,
        effect: 'fade', /*이미지에fade주기(effect: 'fade',)*/
        pagination: {
            el: '.main_interior .page',
            clickable: true, /*클릭안되면 쓰면된다.*/
        },/*도트만들때필요함*/
        navigation: {
            nextEl: '.main_interior .next',
            prevEl: '.main_interior .prev',
        },/*화살표*/
    });

    const MSS = new Swiper('.main_sns_slide', {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 8,
        centeredSlides: true,
        navigation: {
            nextEl: '.main_sns .next',
            prevEl: '.main_sns .prev',
        },
    });

});

$(function () {

    //스크롤이 됐을 떄 header에 on을 붙인다.
    //스크롤이 0이면 header에서 on을 땐다.
    //event : click, scroll, wheel, mouseenter, mouseleave, change

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


});