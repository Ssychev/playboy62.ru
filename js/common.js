$(function() {

$(".toggle").click(function() {
	$(".toggled").slideDown(1500);
	$(this).fadeOut();
});

if($(window).width()>769) {
 $('.parallax').parallax();
};

$(window).resize(function(){
  if($(window).width()>769) {
 $('.parallax').parallax();
};
});

$(".navigate").mPageScroll2id();

$('.slider').owlCarousel({
		loop: true,
		nav: true,
    margin: 10,
    responsiveClass:  true,
    navText: ["<img src='../img/nav_left.svg'>","<img src='../img/nav_right.svg'>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        765:{
            items:2
        },
        1000:{
            items:3,
        }
    }
})

//Анимация сэндвича
  $(".toggle_mnu").click(function() {
    $(".toggle_mnu, .sandwich, .menu").toggleClass("active");
  });

$('[href="#popup_form"]').magnificPopup({
        type: 'inline',
        mainClass: 'custom',
    });

$('.popup_gallery').magnificPopup({
 delegate: 'a',
 type: 'image',
 tLoading: 'Загрузка изображения #%curr%...',
 zoom: {
     enabled: true,
     duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
 },
 gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
 }
 });


});
