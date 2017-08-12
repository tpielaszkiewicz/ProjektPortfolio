 $(document).ready(function () {

     var timeout_len = 0;
     var max_width = 0;
     var duration = 300;
     var win_width = 0;




     $("#rozsuwane1").mouseenter(function () {
         win_width = $(window).width();

         if (win_width > 992) {

             max_width = $("#rozsuwane_main").width() * 0.995;
             $(".rozsuwane").stop().animate({
                     width: 0.2 * max_width + "px"

                 }, {
                     duration: duration,
                     queue: false
                 },
                 'linear',

             );
             $("#rozsuwane1").stop().animate({
                 width: 0.4 * max_width + "px"
             }, {
                 duration: duration,
                 complete: function () {
                     $("#rozsuwane1_mask").css('opacity', '1.0');
                 },
                 queue: false
             }, 'linear', );
         } else {

             max_width = $("#rozsuwane_main").width();
             $("#rozsuwane2").stop().animate({
                     width: 0.2 * max_width + "px"

                 }, {
                     duration: duration,
                     queue: false
                 },
                 'linear',

             );
             $("#rozsuwane1").stop().animate({
                 width: 0.8 * max_width + "px"
             }, {
                 duration: duration,
                 complete: function () {
                     $("#rozsuwane1_mask").css('opacity', '1.0');
                 },
                 queue: false
             }, 'linear', );

         }


     });

     $("#rozsuwane1").mouseleave(function () {
         win_width = $(window).width();
         if (win_width > 992) {
             max_width = $("#rozsuwane_main").width() * 0.995;
             $("#rozsuwane1_mask").css('opacity', '0.0');
             $(".rozsuwane").stop().animate({
                 width: 0.25 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {},
                 queue: false
             }, 'linear', );
         } else {
             max_width = $("#rozsuwane_main").width();
             $("#rozsuwane1_mask").css('opacity', '0.0');
             $("#rozsuwane1").stop().animate({
                 width: 0.5 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {},
                 queue: false
             }, 'linear', );
             $("#rozsuwane2").stop().animate({
                 width: 0.5 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {},
                 queue: false
             }, 'linear', );
         }
     });

     $("#rozsuwane2").mouseenter(function () {
         win_width = $(window).width();
         if (win_width > 992) {
             max_width = $("#rozsuwane_main").width() * 0.995;
             $(".rozsuwane").stop().animate({
                     width: 0.2 * max_width + "px"

                 }, {
                     duration: duration,
                     queue: false
                 },
                 'linear',

             );
             $("#rozsuwane2").stop().animate({
                 width: 0.4 * max_width + "px"
             }, {
                 duration: duration,
                 complete: function () {
                     $("#rozsuwane2_mask").css('opacity', '1.0');
                 },
                 queue: false
             }, 'linear', );
         } else {

             max_width = $("#rozsuwane_main").width();
             $("#rozsuwane1").stop().animate({
                     width: 0.2 * max_width + "px"

                 }, {
                     duration: duration,
                     queue: false
                 },
                 'linear',

             );
             $("#rozsuwane2").stop().animate({
                 width: 0.8 * max_width + "px"
             }, {
                 duration: duration,
                 complete: function () {
                     $("#rozsuwane2_mask").css('opacity', '1.0');
                 },
                 queue: false
             }, 'linear', );

         }


     });

     $("#rozsuwane2").mouseleave(function () {
         win_width = $(window).width();
         if (win_width > 992) {
             max_width = $("#rozsuwane_main").width() * 0.995;
             $("#rozsuwane2_mask").css('opacity', '0.0');

             $(".rozsuwane").stop().animate({
                 width: 0.25 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {

                 },
                 queue: false
             }, 'linear', );
         } else {
             max_width = $("#rozsuwane_main").width();
             $("#rozsuwane2_mask").css('opacity', '0.0');
             $("#rozsuwane2").stop().animate({
                 width: 0.5 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {},
                 queue: false
             }, 'linear', );
             $("#rozsuwane1").stop().animate({
                 width: 0.5 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {},
                 queue: false
             }, 'linear', );
         }
     });


     $("#rozsuwane3").mouseenter(function () {
         win_width = $(window).width();
         if (win_width > 992) {
             max_width = $("#rozsuwane_main").width() * 0.995;
             $(".rozsuwane").stop().animate({
                     width: 0.2 * max_width + "px"

                 }, {
                     duration: duration,
                     queue: false
                 },
                 'linear',

             );
             $("#rozsuwane3").stop().animate({
                 width: 0.4 * max_width + "px"
             }, {
                 duration: duration,
                 complete: function () {
                     $("#rozsuwane3_mask").css('opacity', '1.0');
                 },
                 queue: false
             }, 'linear', );
         } else {

             max_width = $("#rozsuwane_main").width();
             $("#rozsuwane4").stop().animate({
                     width: 0.2 * max_width + "px"

                 }, {
                     duration: duration,
                     queue: false
                 },
                 'linear',

             );
             $("#rozsuwane3").stop().animate({
                 width: 0.8 * max_width + "px"
             }, {
                 duration: duration,
                 complete: function () {
                     $("#rozsuwane3_mask").css('opacity', '1.0');
                 },
                 queue: false
             }, 'linear', );

         }


     });

     $("#rozsuwane3").mouseleave(function () {
         win_width = $(window).width();
         if (win_width > 992) {
             max_width = $("#rozsuwane_main").width() * 0.995;
             $("#rozsuwane3_mask").css('opacity', '0.0');
             $(".rozsuwane").stop().animate({
                 width: 0.25 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {

                 },
                 queue: false
             }, 'linear', );
         } else {
             max_width = $("#rozsuwane_main").width();
             $("#rozsuwane3_mask").css('opacity', '0.0');
             $("#rozsuwane3").stop().animate({
                 width: 0.5 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {},
                 queue: false
             }, 'linear', );
             $("#rozsuwane4").stop().animate({
                 width: 0.5 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {},
                 queue: false
             }, 'linear', );
         }
     });

     $("#rozsuwane4").mouseenter(function () {
         win_width = $(window).width();
         if (win_width > 992) {
             max_width = $("#rozsuwane_main").width() * 0.995;
             $(".rozsuwane").stop().animate({
                     width: 0.2 * max_width + "px"

                 }, {
                     duration: duration,
                     queue: false
                 },
                 'linear',

             );
             $("#rozsuwane4").stop().animate({
                 width: 0.4 * max_width + "px"
             }, {
                 duration: duration,
                 complete: function () {
                     $("#rozsuwane4_mask").css('opacity', '1.0');
                 },
                 queue: false
             }, 'linear', );

         } else {

             max_width = $("#rozsuwane_main").width();
             $("#rozsuwane3").stop().animate({
                     width: 0.2 * max_width + "px"

                 }, {
                     duration: duration,
                     queue: false
                 },
                 'linear',

             );
             $("#rozsuwane4").stop().animate({
                 width: 0.8 * max_width + "px"
             }, {
                 duration: duration,
                 complete: function () {
                     $("#rozsuwane4_mask").css('opacity', '1.0');
                 },
                 queue: false
             }, 'linear', );

         }


     });

     $("#rozsuwane4").mouseleave(function () {
         win_width = $(window).width();
         if (win_width > 992) {
             max_width = $("#rozsuwane_main").width() * 0.995;
             $("#rozsuwane4_mask").css('opacity', '0.0');
             $(".rozsuwane").stop().animate({
                 width: 0.25 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {

                 },
                 queue: false
             }, 'linear', );

         } else {
             max_width = $("#rozsuwane_main").width();
             $("#rozsuwane4_mask").css('opacity', '0.0');
             $("#rozsuwane4").stop().animate({
                 width: 0.5 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {},
                 queue: false
             }, 'linear', );
             $("#rozsuwane3").stop().animate({
                 width: 0.5 * max_width + "px"

             }, {
                 duration: duration,
                 complete: function () {},
                 queue: false
             }, 'linear', );
         }
     });

 });


 $(window).resize(function () {
     win_width = $(window).width();
     if (win_width > 992) {
         max_width = $("#rozsuwane_main").width() * 0.995;
         $(".rozsuwane").css({
             width: 0.25 * max_width + "px"
         });}

         else {
             max_width = $("#rozsuwane_main").width();
             $(".rozsuwane").css({
                 width: 0.5 * max_width + "px"
             });
         }
     }
 );
