$(document).ready(function(){
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
        draggable:true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            }
        }]

    });
});