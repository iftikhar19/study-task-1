$(document).ready(function () {
    $(".hamburger-menu").click(function () {
        $(".sidenav").toggleClass("sidenav-show");
        $("#hamburger-hide").hide();

    });
    $(".closebtn").click(function () {
        $(".sidenav").toggleClass("sidenav-show");
        $("#hamburger-hide").show();

    });
    $('.bf-testimonial-slick').slick({
        pauseOnHover: true,
        autoplay: true,
        autoplayspeed: 2000,
        speed: 1000,
        centerPadding: '20%',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        draggable: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            }
        }]

    });

    $('.footer-col .icon-plus').click(function(){
        $(this).closest('.footer-col').find('.footer-content').slideToggle();
        $(this).find('i').toggleClass('fa-minus');
        $(this).find('i').toggleClass('fa-plus');
    });
});