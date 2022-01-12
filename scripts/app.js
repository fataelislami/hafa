// global loadout
// init foundation plugin 
$(document).ready(function() {
  $(document).foundation();
});

// menu offcanvas trigger 
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
});

// force welcome-screen section match window height.
$height_window = $(window).height();
$(".welcome-screen").height($height_window)

//sticky header and menu
$(window).scroll(function(){
   var scrollAmt = $(this).scrollTop();
   if(scrollAmt > $height_window) { 
     $(".title-bar").addClass("fixed");
   } else {
     $(".title-bar").removeClass("fixed");
   }   
});

// smooth scroll anchor
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top-20
      }, 1000);
      return false;
    }
  }
});

/* END - global loadout */

/* init carousel */
var owl5 = $('.carousel-5');
  owl5.owlCarousel({
  margin: 0,
  navText:['<span class="lnr"></span>','<span class="lnr"></span>'],
  loop: true,
  nav: true,
  dots:false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 5
    }
  }
})
var owlbig = $('.with-carousel .carousel');
  owlbig.owlCarousel({
  margin: 0,
  navText:['<span class="lnr"></span>','<span class="lnr"></span>'],
  loop: true,
  nav: true,
  dots:true,
  items: 1,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true
})
/* END - init carousel */

/* Timer/countdown jquery plugin */
$counter=$('#getting-started');
$counter.countdown($counter.attr("data-end-date"), function(event) {
var $this = $(this).html(event.strftime(''
  + '<div class="column"><span>%w</span> Weeks </div>'
  + '<div class="column"><span>%d</span> Days </div>'
  + '<div class="column"><span>%H</span> Hours </div>'
  + '<div class="column"><span>%M</span> Minutes </div>'
  + '<div class="column"><span>%S</span> Seconds </div>'));
});
/* END - Timer/countdown jquery plugin */

/* timeline/story thing */
// readjust height each historical date to match with style.
$(".timeline").ready(function(){ //realigning the arrow per list item
  $(this).find("ul.story li").each(function(){
    var positionTop = Math.floor($(this).position().top);
    var curPos = Math.floor($(this).height()/2);
    var centerPos = positionTop + curPos;
    var heightLine = 233;
    var halfPos = Math.floor(heightLine/2);
    var curMod = Math.floor(centerPos % heightLine);
    var pushFromTop;
    if(curMod < halfPos )
    {
      pushFromTop = halfPos - curMod;
      $(this).css("margin-top", pushFromTop)
    }
    else if(curMod > halfPos)
    {
      pushFromTop = heightLine - curMod;
      $(this).css("margin-top", pushFromTop)
    }
  })
})

// redeclare data paralax for timeline/automatic calculate height content 
var $timeline = $(".timeline-wrapper");
$timeline.ready(function(){
  var lengthList = $timeline.find("ul.story li").length;
  var heightTimeline = $timeline.height();
  var divHeightTimeline = Math.floor(heightTimeline / (heightTimeline/(80+lengthList)));
  $timeline.attr("data-200-top", "transform:translateY(-"+ (divHeightTimeline) +"%)");
  $timeline.attr("data--200-bottom", "transform:translateY("+(divHeightTimeline-(5-lengthList/(lengthList/2)))+"%)");
})
/* END - timeline/story thing */

/* Custom paralax */
$varalax = $("section.custom-paralax");
$(function(){
  $varalax.each(function(){
    $prevID = $(this).prev().attr("id");
    $(this).find(".wrapper").html('<div class="row-1" data-anchor-target="#'+$prevID+'" data-top="transform:translateY(-90px); background-position:-20px bottom" data-top-bottom="transform:translateY(0px); background-position:0px bottom"></div><div class="row-2" data-anchor-target="#'+$prevID+'" data-top="transform:translateY(-60px); background-position:30px bottom" data-top-bottom="transform:translateY(0px); background-position:0px bottom"></div><div class="row-3"></div>')
  })
})
/* END - Custom paralax */

/* init paralax with skrollr plugin */
if($(window).width()>768)
{
  // if($(window).resize()){
    $( document ).ready(function() {
      skrollr.init({
          forceHeight: false
      });
    }); 
  // }
}
/* END - init paralax with skroll plugin */

/* GOOGLE FORM */
// When the window has finished loading create our google map below
function initMap() {
    // Declare Latitude, Longitude and custome title
    var mapElement = document.getElementById('map');
    var lat = mapElement.getAttribute("data-lat");
    var lng = mapElement.getAttribute("data-long");
    var titleMaps = mapElement.getAttribute("data-title");
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(lat, lng), // Bali

        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        fullscreenControl: true,
        scrollwheel: false,
        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]
      };
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map,
        title: titleMaps
    });
}
/* END - GOOGLE FORM */

/* RSVP AJAX FORM */
$submit_form = $('#submit-rsvp');
// first thing first reset all input
$submit_form.find(":input, textarea").val("");

// add custom validator for checkbox limit
Foundation.Abide.defaults['validators']['checkbox_limit'] =
function($el, required, parent) {
  var group = parent.closest('.checkbox-group');
  var min = group.attr('data-validator-min');
  var checked = group.find(':checked').length;
  if (checked >= min) {
    group.find('.form-error').hide();
    return true;
  } else {
    group.find('.form-error').show();
    return false;
  }
};

// SUBMIT AJAX POST
$submit_form.submit( function() {
  $(this).on("formvalid.zf.abide", function(ev,frm) { // Good to go...
    $submit_form.find("button").text("Sending...");

    $.ajax({
      url     : "php/mailer.php",
      type    : "POST",
      enctype : $(this).attr('enctype','multipart/form-data'),
      data    : $(this).serialize(),
      success : function( response ) {

        if(response=='success')
          $submit_form.find(".greetings").addClass("reveal");
        else 
          $submit_form.find("button").text("SUBMIT");
        
      }

    });
  });
  return false;
});
/* END - RSVP AJAX FORM */

/* EMBED MUTED YOUTUBE */
var ytplayer_muted = document.getElementById('ytplayer-muted');
if (ytplayer_muted !== null && ytplayer_muted.length !== null){
  var yt_tag = document.createElement('script');

  yt_tag.src = "//www.youtube.com/iframe_api";
  var yt_firstScriptTag = document.getElementsByTagName('script')[0];
  yt_firstScriptTag.parentNode.insertBefore(yt_tag, yt_firstScriptTag);

  var player;

  function onYouTubeIframeAPIReady() {
      yt_player = new YT.Player('ytplayer-muted', {
          events: {
              'onReady': yt_onPlayerReady
          }
      });
  }

  function yt_onPlayerReady() {
      yt_player.mute();
  }
}
/* END - Embed Youtube */

/* EMBED MUTED Vimeo */
var vimeo_muted = document.getElementById('vimeo-muted');
if (vimeo_muted !== null && vimeo_muted.length !== null){
  // load api vimeo
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "https://f.vimeocdn.com/js/froogaloop2.min.js";
  head.appendChild(script);

  // load iframe vimeo
  var vi_videoUrl = document.getElementById('vimeo-muted').getAttribute("data-video");
  var vi_endpoint = 'http://www.vimeo.com/api/oembed.json';
  var vi_callback = 'embedVideo';
  var vi_url = vi_endpoint + '?url=' + encodeURIComponent(vi_videoUrl) + '&autoplay=true' + '&callback=' + vi_callback + '&width=420';
  
  function embedVideo(video) {
    var vi_div = vimeo_muted;
    vi_div.innerHTML = unescape(video.html);
  
    var vi_ifr = vi_div.firstChild;
    vi_ifr.addEventListener('load', function(e) {
      var vi_player = $f(vi_ifr);
      vi_player.api('setVolume', 0);
    });
  }
  
  function vi_vimeoInit() {
    var vi_js = document.createElement('script');
    vi_js.src = vi_url;
    document.querySelector('head').appendChild(vi_js);
  }

  window.onload = vi_vimeoInit;
}
/* END - EMBED MUTED Vimeo */

/* Gallery filter with Shuffle.js plugin */
var Shuffle = window.shuffle;
var element = document.querySelector('.galleries');

var Pawiwahan = function (element) {
  this.element = element;

  this.shuffle = new Shuffle(element, {
    itemSelector: '.gallery',
    sizer: element.querySelector('.gallery-sizer'),
  });

  this._activeFilters = [];
  this.addFilterButtons();
};

Pawiwahan.prototype.toArray = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

Pawiwahan.prototype.addFilterButtons = function () {
  var options = document.querySelector('.filters');

  if (!options) {
    return;
  }

  var filterButtons = this.toArray(
    options.children
  );

  filterButtons.forEach(function (button) {
    button.addEventListener('click', this._handleFilterClick.bind(this), false);
  }, this);
};

Pawiwahan.prototype._handleFilterClick = function (evt) {
  var btn = evt.currentTarget;
  var isActive = btn.classList.contains('active');
  var btnGroup = btn.getAttribute('data-group');

  this._removeActiveClassFromChildren(btn.parentNode);

  var filterGroup;
  if (isActive) {
    btn.classList.remove('active');
    filterGroup = Shuffle.ALL_ITEMS;
  } else {
    btn.classList.add('active');
    filterGroup = btnGroup;
  }

  this.shuffle.filter(filterGroup);
};

Pawiwahan.prototype._removeActiveClassFromChildren = function (parent) {
  var children = parent.children;
  for (var i = children.length - 1; i >= 0; i--) {
    children[i].classList.remove('active');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  window.pawiwahan = new Pawiwahan(document.getElementById('grid'));
});
/* END - Gallery filter with Shuffle.js plugin */