//navbar
$(document).on('click', '.yamm .dropdown-menu', function(e) {
   e.stopPropagation()
})


//sunburst

$('div.container-full').pow({
  rays: 16, // positive integer > 1
  bgColorStart: '#3499DB', // any css color
  rayColorStart: '#0F85D1', // any css color
  bgColorEnd: '#58ACE3', // any css color
  rayColorEnd: '#3499DB', // any css color
  originX: '50%', // percentage, e.g. '33%'
  originY: '10%' // percentage, e.g. '120%'
 
  // note: 'originEl' overrides 'originX' and 'originY'
});

$('div.orangeburst').pow({
  rays: 16, // positive integer > 1
  bgColorStart: '#FF6530', // any css color
  rayColorStart: '#FF8359', // any css color
  bgColorEnd: '#FF6530', // any css color
  rayColorEnd: '#FF6530', // any css color
  originX: '50%', // percentage, e.g. '33%'
  originY: '10%' // percentage, e.g. '120%'
 
  // note: 'originEl' overrides 'originX' and 'originY'
});


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