
$(document).ready(function () {

   // ---------sticky navigation-------------------
   $('.sticky-ja').waypoint(function (direction) {
      if (direction == 'down') {
         $('nav').addClass('sticky');
      } else {
         $('nav').removeClass('sticky');
      }
   });

   /* ------ Scroll button 1 ------ */
   $('.js--btn--1').click(function () {
      $('html, body').animate({ scrollTop: $('.payment').offset().top }, 2000);
   });

   /* ------ Scroll button 2 ------ */
   $('.js--btn--2').click(function () {
      $('html, body').animate({ scrollTop: $('.features').offset().top }, 1000);
   });


   /* ------Smooth Scroll------ */

                           //  way 1 

   $("a[href^='#']").click(function(e) {
      e.preventDefault();
      var position = $($(this).attr("href")).offset().top;
      $("body, html").animate({
          scrollTop: position
      } ,1000 );
  });

                           // way 2

   // $('.feture').click(function () {
   //    $('html, body').animate({ scrollTop: $('.features').offset().top }, 1000);
   // });

   // $('.proces').click(function () {
   //    $('html, body').animate({ scrollTop: $('.process').offset().top }, 1000);
   // });

   // $('.cite').click(function () {
   //    $('html, body').animate({ scrollTop: $('.places').offset().top }, 1000);
   // });

   // $('.plans').click(function () {
   //    $('html, body').animate({ scrollTop: $('.payment').offset().top }, 1000);
   // });


   /* ------ Animation css add ------ */


   $('.one').waypoint(function () {
      $('.one').addClass('animate__fadeIn');
   }, {
      offset: '50%'
   });

   $('.img').waypoint(function () {
      $('.img').addClass('animate__rollIn');
   }, {
      offset: '50%'
   });


   $('.place').waypoint(function () {
      $('.place').addClass('animate__zoomIn');
   }, {
      offset: '50%'
   });
   
   $('.coll').waypoint(function () {
      $('.coll').addClass('animate__heartBeat');
   }, {
      offset: '50%'
   });









});




