$(document).ready(function(){
    $(".site_bt").click(function(e){
        e.preventDefault();
        // $(".site_link").stop().slideUp();
    });
    $(".site_bt").click(function(){
        $(".site_link").toggle();
        $(".fa-chevron-down").toggle();
        $(".fa-chevron-up").toggle();
    });
    
    $(window).click(function (e) {
        const isFamMenu = Boolean(e.target.closest(".site_bt"));
        if (!isFamMenu) {
            $(".site_link").hide();
            $(".fa-chevron-up").hide();
            $(".fa-chevron-down").show();
        }
    });

    let i = 0;
    let count = $(".ban_txt>li").length;

    
    $(".ban_txt>li").stop().fadeOut();
    $(".ban_txt>li").eq(i).stop().fadeIn(1000,function(){
        $(".txt_gp").stop().animate({"top":"0px"});
        $(".txt_down>p").stop().animate({"top":"0px"});
    });

    $(".next").click(function(){
        $(".ban_photo").stop().animate({"margin-top":"-200vh"},1000,function(){
            $(".ban_photo>li:first-child").appendTo(".ban_photo");
            $(".ban_photo").css({"margin-top":"-100vh"});

            if(i == count - 1){
                i = 0;
            }else{
                i++;
            }

            $(".txt_gp").css({"top":"-211px"});
            $(".txt_down>p").css({"top":"-111px"});
            $(".ban_txt>li").stop().fadeOut();
            $(".ban_txt>li").eq(i).stop().fadeIn(1000,function(){
                $(".txt_gp").stop().animate({"top":"0px"});
                $(".txt_down>p").stop().animate({"top":"0px"});
            });
            $(".center>li").stop().fadeOut();
            $(".center>li").eq(i).stop().fadeIn();

            $(".number>p").stop().fadeOut();
            $(".number>p").eq(i).stop().fadeIn();
        });
    });

    $(".prev").click(function(){
        $(".ban_photo").stop().animate({"margin-top":"0vh"},1000,function(){
            $(".ban_photo>li:last-child").prependTo(".ban_photo");
            $(".ban_photo").css({"margin-top":"-100vh"});
        });

        if(i == 0){
            i = count - 1;
        }else{
            i--;
        }
        $(".txt_gp").css({"top":"-211px"});
        $(".txt_down>p").css({"top":"-111px"});
        $(".ban_txt>li").stop().fadeOut();
        $(".ban_txt>li").eq(i).stop().fadeIn(1000,function(){
            $(".txt_gp").stop().animate({"top":"0px"});
            $(".txt_down>p").stop().animate({"top":"0px"});
        });
        $(".center>li").stop().fadeOut();
        $(".center>li").eq(i).stop().fadeIn();
        
        $(".number>p").stop().fadeOut();
        $(".number>p").eq(i).stop().fadeIn();
    });

    setInterval(function(){
        $(".ban_photo").stop().animate({"margin-top":"-200vh"},1000,function(){
            $(".ban_photo>li:first-child").appendTo(".ban_photo");
            $(".ban_photo").css({"margin-top":"-100vh"});

            if(i == count - 1){
                i = 0;
            }else{
                i++;
            }

            $(".txt_gp").css({"top":"-211px"});
            $(".txt_down>p").css({"top":"-111px"});
            $(".ban_txt>li").stop().fadeOut();
            $(".ban_txt>li").eq(i).stop().fadeIn(1000,function(){
                $(".txt_gp").stop().animate({"top":"0px"});
                $(".txt_down>p").stop().animate({"top":"0px"});
            });
            $(".center>li").stop().fadeOut();
            $(".center>li").eq(i).stop().fadeIn();

            $(".number>p").stop().fadeOut();
            $(".number>p").eq(i).stop().fadeIn();
        });

    },3000);

    setInterval(function(){
        $(".inte_gp").stop().animate({"margin-left":"-350px"}, 500, function(){
            $(".inte_gp>li:first-child").appendTo(".inte_gp");
            $(".inte_gp").css({"margin-left":"0"});
        });
    }, 2000);


});
