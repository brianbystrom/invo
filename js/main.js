//sunburst

$('div.container-full').pow({
  rays: 16, // positive integer > 1
  bgColorStart: '#3499DB', // any css color
  rayColorStart: '#0F85D1', // any css color
  bgColorEnd: '#58ACE3', // any css color
  rayColorEnd: '#3499DB', // any css color
  originX: '35%', // percentage, e.g. '33%'
  originY: '20%' // percentage, e.g. '120%'
 
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