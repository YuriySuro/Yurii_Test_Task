$(document).ready(function() {
    // Slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
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

    // Modal window
    $(".modal").each( function(){
        $(this).wrap('<div class="overlay"></div>')
    });
    
    $(".open-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;
        
        var $this = $(this),
                modal = $($this).data("modal");
        
        $(modal).parents(".overlay").addClass("open");
        setTimeout(function(){
            $(modal).addClass("open");
        }, 350);
        
        $(document).on('click', function(e){
            var target = $(e.target);
            
            if ($(target).hasClass("overlay")){
                $(target).find(".modal").each(function(){
                    $(this).removeClass("open");
                });
                setTimeout(function(){
                    $(target).removeClass("open");
                }, 350);
            }
            
        });
        
    });
    
    $(".close-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;
        
        var $this = $(this),
                modal = $($this).data("modal");
        
        $(modal).removeClass("open");
        setTimeout(function(){	
            $(modal).parents(".overlay").removeClass("open");
        }, 350);
        
    });

    // Scroll Down
    $(".go_to").click(function(e) { 
        e.preventDefault();
        var scroll_el = $(this).attr("href");
        if($(scroll_el).length != 0) { 
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 250);
        }
        return false;
    });

    // Timer 
    function getDate() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        if(m < 10) {
            m = "0" + m;
        }
        if(h < 10) {
            h = "0" + h;
        }
        $(".timer span").text(h + ":"+ m);
        setInterval(function() {
            getDate()
        }, 1000);        
    }
    getDate();
});