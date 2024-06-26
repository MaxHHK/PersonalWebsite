// Personal

var audio = document.getElementById('audio');
var playIcon = document.getElementById('play-icon');

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
  } else {
    audio.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var navigation = document.getElementById("nav_part");
  var block1 = document.getElementById("Summary");
  var block2 = document.getElementById("break_img");

  function handleScroll() {
    var block1Bounding = block1.getBoundingClientRect();
    var block2Bounding = block1.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (block1Bounding.top <= 0) {
      navigation.style.opacity = "1";
    } else {
      navigation.style.opacity = "0";
    }
  }

  handleScroll(); // Initially handle scroll to check the visibility

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
});

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//service section owl carousel
$(".service_owl-carousel").owlCarousel({
    autoplay: true,
    center: true,
    nav: true,
    loop: true,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3,
        },
        991: {
            items: 3
        }
    }
});

// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});