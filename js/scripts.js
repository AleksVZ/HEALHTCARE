$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dotsEach:true,
        smartSpeed:3000,
        margin:20,
        navText: [ '', ' ' ],
        responsive:{
            0:{
                items:1
            },
            1100:{
                items:3
            }
        }
    });
    $( function() {
        $( "#accordion" ).accordion();
      } );





});