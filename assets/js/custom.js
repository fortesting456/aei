/* Wow Js */
new WOW().init();

/* ==========================================
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('.main-header').addClass('fixed-header');
    }
    else {
        $('.main-header').removeClass('fixed-header');
    }
});

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


var btn = $('#top-button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});



/* Our Values Carousel */
$('.our-values-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1.1,
            margin:10,
        },
        600:{
            items:1
        },
        1000:{
            items:1.5
        }
    }
})