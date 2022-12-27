$ = jQuery.noConflict();

jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
        Loading Timeout
     ====================================== */
    $(".loader-area").fadeOut(800);

});

jQuery(function ($) {
    "use strict";


//************************* SCROLL FUNCTIONS***********************//
    // Navbar Scroll Function
    var $window = $(window);
    $window.scroll(function () {
        var $scroll = $window.scrollTop();
        var $navbar = $(".sidemenu-nav");
        if (!$navbar.hasClass("sticky-bottom")) {
            if ($scroll > 250) {
                $navbar.addClass("fixed-menu");
            } else {
                $navbar.removeClass("fixed-menu");
            }
        }
    });

    // Navbar Scroll Function
    var $window = $(window);
    $window.scroll(function () {
        var $scroll = $window.scrollTop();
        var $navbar = $(".fixed-navbar");
        if (!$navbar.hasClass("sticky-bottom")) {
            if ($scroll > 250) {
                $navbar.addClass("fixed-menu1");
            } else {
                $navbar.removeClass("fixed-menu1");
            }
        }
    });


    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 1200);
    });

if($('#home2').length) {
    $(window).scroll(function () {
        var x = $("#home2").offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= x) {
            $(".menu-btn span").addClass("color");
        } else {
            $(".menu-btn span").removeClass("color");
        }
    });
}


    //***************** MENU AND CLOSE BUTTON OFSIDE NAVBAR*********************//
    $('.menu-btn').on("click", function () {
        $('.outer-wrapper').removeClass('end-anm1');
        $('.outer-wrapper').addClass('inner-wrapper');
        $('.main-content').addClass('main-content-hide');
        $('body').css({overflow:'hidden'});
        $('.outer-wrapper').addClass('start-anm1');

    });
    $('.close-outerwindow').on("click", function () {
        $('.outer-wrapper').removeClass('start-anm1');
        $('.outer-wrapper').addClass('end-anm1');
        $('body').css({overflow:'visible'});
        $('.main-content').removeClass('main-content-hide');
        setTimeout(function () {
            $('.outer-wrapper').removeClass('inner-wrapper');
        }, 800);
    });
    $('.outer-wrapper ul li a').click(function () {
        $('.outer-wrapper').removeClass('inner-wrapper');
    });



//*******************TESTIMONIAL OWL CAROUSAL*********************//
    $('.owl-testimonial').owlCarousel({
        items:3,
        loop:true,
        center:false,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });



    /* =====================================
                    speaker  carousel
        ====================================== */

    // $('.speaker').owlCarousel({
    //
    //     loop: true,
    //     margin: 20,
    //     slideSpeed: 5000,
    //     slideTransition: 'linear',
    //     nav: false,
    //     dots: false,
    //     autoplay: true,
    //     autoplayTimeout: 8000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 3
    //         },
    //         1500: {
    //             items: 4
    //         },
    //     }
    //
    // });

    /* =====================================
            circular bars
    ====================================== */

    $(".circular-wrap").appear(function () {
        $(".circle").circleProgress({
            size: 210,
            lineCap: "butt",
            thickness: 12,
            emptyFill:"rgb(255,255,255,.1)",
            fill: {
                gradient: ["#fff", "#fff"]
            },
        });
    });

});

//*******************INITIALIZE FANCY BOX*************************//
$(document).ready(function () {
    $(".fancybox").fancybox({
        
        afterShow: function() {
          // After the show-slide-animation has ended - play the vide in the current slide
          this.content.find('video').trigger('play')
          
          // Attach the ended callback to trigger the fancybox.next() once the video has ended.
          this.content.find('video').on('ended', function() {
            $.fancybox.next();
          });
        }
    });
});




window.onscroll = function(){
    //滚屏时固定背景的遮罩
    document.querySelectorAll('.fixedbg').forEach(function(pre){
        var bound = pre.parentElement.getBoundingClientRect();
        var clip = 'rect('+ [bound.top + 'px', pre.parentElement.clientWidth + 'px', bound.bottom + 'px', 0].join() +')';
        pre.style.clip = clip;
    })
}