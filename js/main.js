//navbar
$(document).on('click', '.yamm .dropdown-menu', function(e) {
   e.stopPropagation()
})


//sunburst

$('div.container-full').pow({
  rays: 16, // positive integer > 1
  bgColorStart: '#3499DB', // any css color
  rayColorStart: '#3499DB', // any css color
  bgColorEnd: '#58ACE3', // any css color
  rayColorEnd: '#3499DB', // any css color
  originX: '50%', // percentage, e.g. '33%'
  originY: '10%' // percentage, e.g. '120%'
 
  // note: 'originEl' overrides 'originX' and 'originY'
});

$('div.orangeburst').pow({
  rays: 16, // positive integer > 1
  bgColorStart: '#FF6530', // any css color
  rayColorStart: '#FF6530', // any css color
  bgColorEnd: '#FF6530', // any css color
  rayColorEnd: '#FF8359', // any css color
  originX: '50%', // percentage, e.g. '33%'
  originY: '10%' // percentage, e.g. '120%'
 
  // note: 'originEl' overrides 'originX' and 'originY'
});


//fitText

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

jQuery(".auctime").fitText(.4, { maxFontSize: '40px'});
jQuery(".aucprice").fitText(.3, { minFontSize: '20px', maxFontSize: '40px'});


//carousel

$(document).ready(function() {    
  //Events that reset and restart the timer animation when the slides change
  $("#transition-timer-carousel").on("slide.bs.carousel", function(event) {
      //The animate class gets removed so that it jumps straight back to 0%
      $(".transition-timer-carousel-progress-bar", this)
        .removeClass("animate").css("width", "0%");
  }).on("slid.bs.carousel", function(event) {
      //The slide transition finished, so re-add the animate class so that
      //the timer bar takes time to fill up
      $(".transition-timer-carousel-progress-bar", this)
        .addClass("animate").css("width", "100%");
  });
  
  //Kick off the initial slide animation when the document is ready
  $(".transition-timer-carousel-progress-bar", "#transition-timer-carousel")
    .css("width", "100%");
});


//login modal

$(document).ready(function(){
    $('.modal-footer button').click(function(){
    var button = $(this);

    if ( button.attr("data-dismiss") != "modal" ){
      var inputs = $('form input');
      var title = $('.modal-title');
      var progress = $('.progress');
      var progressBar = $('.progress-bar');

      inputs.attr("disabled", "disabled");

      button.hide();

      progress.show();

      progressBar.animate({width : "100%"}, 100);

      progress.delay(1000)
          .fadeOut(600);

      button.text("Close")
          .removeClass("btn-primary")
          .addClass("btn-success")
            .blur()
          .delay(1600)
          .fadeIn(function(){
            title.text("success!");
            button.attr("data-dismiss", "modal");
          });
    }
  });

  $('#loginModal').on('hidden.bs.modal', function (e) {
    var inputs = $('form input');
    var title = $('.modal-title');
    var progressBar = $('.progress-bar');
    var button = $('.modal-footer button');

    inputs.removeAttr("disabled");

    title.text("Log in");

    progressBar.css({ "width" : "0%" });

    button.removeClass("btn-success")
        .addClass("btn-primary")
        .text("Ok")
        .removeAttr("data-dismiss");
  });

  $('#signupModal').on('hidden.bs.modal', function (e) {
    var inputs = $('form input');
    var title = $('.modal-title');
    var progressBar = $('.progress-bar');
    var button = $('.modal-footer button');

    inputs.removeAttr("disabled");

    title.text("Sign up");

    progressBar.css({ "width" : "0%" });

    button.removeClass("btn-success")
        .addClass("btn-primary")
        .text("Ok")
        .removeAttr("data-dismiss");
  });
});

// auctions

$(document).ready(function() {

  $('#list').click(function(event){

    event.preventDefault();

    $('#auctions .item').addClass('list-group-item');
    $('#auctions .item .aucimginfo').addClass('col-xs-3 col-sm-3 col-lg-2');
    $('#auctions .item .caption').addClass('col-xs-3 col-sm-4 col-lg-6');
    $('#auctions .item .aucinfopivot').removeClass('aucinfo pull-right col-xs-4');

    for (var i = $('.auction').length; i >= 1; i--) {
      
      $('.auc' + [i] + ' .aucimginfo .aucinfopivot').prependTo( $('.auc' + [i] + ' .bidtime'));

    };

    $('#auctions .item .bidtime div').removeClass('col-xs-4 col-xs-8');
    $('#auctions .item .bidtime div').addClass('col-xs-12');
    $('#auctions .item .bidtime').removeClass('col-xs-12');
    $('#auctions .item .bidtime').addClass('col-xs-3 col-sm-2 col-lg-1');

    $('#auctions .item .timeprice').removeClass('col-xs-12');
    $('#auctions .item .timeprice').addClass('col-xs-3');
    $('#auctions .item .timeprice div').removeClass('col-xs-5 col-xs-7');
    $('#auctions .item .timeprice div').addClass('col-xs-12');

    jQuery(".auctime").fitText(.4, { maxFontSize: '40px'});
    jQuery(".aucprice").fitText(.3, { minFontSize: '20px', maxFontSize: '40px'});
  }); 

  $('#grid').click(function(event){

    event.preventDefault();

    $('#auctions .item').removeClass('list-group-item');
    $('#auctions .item .aucimginfo').removeClass('col-xs-3 col-sm-3 col-lg-2');
    $('#auctions .item .aucinfopivot').addClass('aucinfo pull-right col-xs-4');
    $('#auctions .item .caption').removeClass('col-xs-3 col-sm-4 col-lg-6');
    $('#auctions .item .aucinfopivot').addClass('pull-right aucinfo');

    for (var i = $('.auction').length ; i >= 0; i--) {
      $('.auc' + [i] + ' .aucinfopivot').appendTo('.auc' + [i] + ' .aucimginfo');
      $('.auc' + [i] + ' .bidtime .aucinfopivot').remove();
    };

    $('#auctions .item').addClass('grid-group-item');
    $('#auctions .item aucpluspivot').removeClass('col-xs-12');
    $('#auctions .item aucbidpivot').removeClass('col-xs-12');
    $('#auctions .item .bidtime .aucpluspivot').addClass('col-xs-4');
    $('#auctions .item .bidtime .aucbidpivot').addClass('col-xs-8');
    $('#auctions .item .bidtime').addClass('col-xs-12');
    $('#auctions .item .bidtime').removeClass('col-xs-3 col-sm-2 col-lg-1');

    $('#auctions .item .timeprice').addClass('col-xs-12');
    $('#auctions .item .timeprice').removeClass('col-xs-3');
    $('#auctions .item .timeprice .auctime').addClass('col-xs-7');
    $('#auctions .item .timeprice .aucprice').addClass('col-xs-5');
    $('#auctions .item .timeprice div').removeClass('col-xs-12');

    jQuery(".auctime").fitText(.4, { maxFontSize: '40px'});
    jQuery(".aucprice").fitText(.3, { minFontSize: '20px', maxFontSize: '40px'});
  });
});

jQuery("document").ready (function(){
   jQuery(".para img, iframe").each(function(){
      // First I create the div element.
      var ndiv = jQuery("<div></div>");

      // Now I put the div element into the wrapper, instead of the 'this'
      ndiv.prependTo(jQuery(this).parents(".wrapper940"));

      // Last I put 'this' into the div.
      ndiv.append(this);
   })
});