$('.owl-carousel.carousel_ad').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed: 1500,
    autoplayHoverPause:false,
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

$('.owl-carousel.carousel_deals').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    slideBy: 4,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
});



$(document).ready(function(){
    
    // toggle login button
    $(".menu").click(function(){
      $(".t_box").toggle();
    });


    // hero options toggle button
    $(".flight_details .item").click(function(){
      $(this).find(".toggle_box").toggle();
    });


    // chat box toggle button
    $(".chat_box .chat_icon").click(function(){
        $(this).toggleClass("cross");
        $(this).find(".fa-message").toggleClass("fa-plus");
        $(this).find(".fa-message").toggleClass("fa-xmark");
        $(".chat").toggle();
        $(".chat_desk .btns").toggleClass("flx");
        $(".chat_desk .btns .chat_btn").toggleClass("active");

        // toggle chat and help
        $(".chat_btn").click(function(){
            $(".chat").show();
            $(".help").hide();
        });
        $(".help_btn").click(function(){
            $(".help").show();
            $(".chat").hide();
        });

    });

        // responsive menu open and close

        $(".res_menu_icon").click(function(){
            console.log('hello');
            $(".res_menu").toggle();

            $(".res_menu ul li").click(function(){
                $(this).find("ul").toggle();
            });

        });


    

  });



//   flight search page

$(document).ready(function(){
    // show more toggle in flight search item
    $(".policy_text .toggle").click(function(){
        $(".policy_text .modal").css("display","flex");

        $(".policy_text .modal .fa-xmark").click(function(){

            $(".policy_text .modal").hide();
        });

    });

    // details and refund toggle    

    $(".dtls .toggle_btns button").click(function(){
        $(this).parent().siblings().toggleClass("active");

    });

    $(".policy .toggle_btns button").click(function(){
        $(this).parent().siblings().toggleClass("active");

    });

    $(".fobb .show").click(function(){
        $(this).find(".fa-angle-down").toggleClass("fa-angle-up");
    });

    $(".fobb .active").click(function(){
        $(this).parent().siblings().toggleClass("active");
    });

    // filter toggle
    $(".sidebar .filter_btn").click(function(){
        $(".sidebar .filter").toggle();

    });



    // hotel search page
    // see more toggle
    $(".sidebar .see_more").click(function(){
        $(this).nextAll().toggle();
        $(this).find("span").toggle();

    });

    // best match toggle
    $(".mainbar .best_match").click(function(){
        $(".mainbar .best_match ul").toggle();

    });
});
