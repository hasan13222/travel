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