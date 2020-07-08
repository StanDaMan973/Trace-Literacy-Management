




$(document).ready(function ($) {
    'use strict';


    /* ---------------------------------------------
         page  Prealoader
     --------------------------------------------- */
    $(window).on('load', function () {
        $("#loading-center-page").fadeOut();
        $("#loading-page").delay(400).fadeOut("slow");
    });

    
    
    
     /* ---------------------------------------------
         Sticky header
     --------------------------------------------- */
    $(window).on('scroll', function () {
        var scroll_top=$(window).scrollTop();
        
        if (scroll_top > 40){
            $('.navbar').addClass('sticky');
          
        }
        else{
          $('.navbar').removeClass('sticky');  
        }
        
    });
    
      /* ---------------------------------------------
         Pogress bar 
     --------------------------------------------- */
    
    var delay = 500;
$(".progress-bar").each(function(i){
    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+'%');
        }
    });
});
    
 




    /* ---------------------------------------------
     owl caroussel
     --------------------------------------------- */


  

    $('.testimonial-caroussel').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: true,
        margin:12,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1

            },
            1200: {
                items: 2
            }
        }
    });



    $('.client-caroussel').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: false,
        margin:15,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 5

            },
            1200: {
                items: 5
            }
        }
    });
    
    
   
 

    /*--------------------
 MAGNIFIC POPUP IMAGE  JS
 ----------------------*/
$('.modal-image').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-with-zoom',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,

        duration: 300,
        easing: 'ease-in-out',

        opener: function (openerElement) {

            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }
});


   


    /* ---------------------------------------------
     Smooth scroll
     --------------------------------------------- */

    $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 750);
                return false;
            }
        }
    });
});


    /*--------------------
 Pop up
 ----------------------*/

let serviceBox = document.querySelectorAll('[data-box]'); 
let popUp = document.querySelectorAll('#mypopup'); 


 serviceBox.forEach(function(box) {
   box.addEventListener('click', function(e) {
     let target = e.currentTarget;

          if (target === serviceBox[0]) {
              popUp[0].classList.toggle('show');
             }

               if (target === serviceBox[1]) {
                 popUp[1].classList.toggle('show');
                  }

               if (target === serviceBox[2]) {
                  popUp[2].classList.toggle('show');
                                              }

        if (target === serviceBox[3]) {
           popUp[3].classList.toggle('show');
        }

        if (target === serviceBox[4]) {
            popUp[4].classList.toggle('show');
       }

       if (target === serviceBox[5]) {
            popUp[5].classList.toggle('show');

         }

     })

});







