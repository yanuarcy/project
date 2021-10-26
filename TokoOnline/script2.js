// $(window).scroll(function() {
// 	var wScroll = $(this).scrollTop();

// if(wScroll > $('.backup').offset().top - 500 ) {
// 	$('.backup .upup').each(function(i) {
// 		setTimeout(function() {
// 			$('.backup .upup').eq(i).addClass('muncul')
			
// 		}, 100 * (i + 1));
// 	});
	

// }

$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });

    $('#topBtn').click(function(){
        $('html, body').animate({scrollTop: 0}, 800);
    });

});

$(document).ready(function(){

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      

      var currentSlide = $('.your-element').slick('slickCurrentSlide');

});


$('.testitesti .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    margin: 10,
    autoplay: true,
    stagePadding: 110,
    autoplayTimeout: 1500,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }

    }
})

$('.WhyMSGlowpic .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    center: true,
    margin: 10,
    autoHeight: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3500,
    animateOut: 'backOutLeft',
    animateIn: 'backInRight',
})

$('.popularProduct .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 30,
    items: 4,
    autoplay: true,
    autoplayTimeout: 3000,
})


function showBeli() {
    var element = document.getElementById('beli');

    if (element.style.visibility == 'hidden') {
        element.style.visibility = 'visible';

    } else {
        element.style.visibility = 'hidden';
    }
}

function showBeli2() {
    var element = document.getElementById('beli2');

    if (element.style.visibility == 'hidden') {
        element.style.visibility = 'visible';

    } else {
        element.style.visibility = 'hidden';
    }
}

function showBeli3() {
    var element = document.getElementById('beli3');

    if (element.style.visibility == 'hidden') {
        element.style.visibility = 'visible';

    } else {
        element.style.visibility = 'hidden';
    }
}

function showBeli4() {
    var element = document.getElementById('beli4');

    if (element.style.visibility == 'hidden') {
        element.style.visibility = 'visible';

    } else {
        element.style.visibility = 'hidden';
    }
}