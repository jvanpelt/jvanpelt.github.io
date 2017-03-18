$('document').ready(function(){
    
    enableScrolling();
    var isScrolling = false;
    var scrollTimer;
    var initY;
    var direction = "";
    var play = 4; // without a little play scroll up detection stops working
   
    function disableScrolling(){
        console.log("disable");
        window.scrollTo(0, play);
        window.onscroll=function(){
            window.scrollTo(0, play);
            scrollAction();
        };
    }
    
    function enableScrolling(){
        console.log("enable");
        window.scrollTo(0, play);
        window.onscroll=function(){
            if(!initY){
                initY = play;
            } else if (window.scrollY > initY){
                direction = "down";
                console.log("direction: " + direction);
                disableScrolling();
            } else if(window.scrollY < initY){
                direction = "up";
                console.log("direction: " + direction);
                disableScrolling();
            }
        };
    }
    
    function scrollAction(){
        console.log("I'M NOT SCROLLING");
        
        if(!isScrolling){
            isScrolling = true;
            changeSections();
        }
        
        clearTimeout(scrollTimer);
        
        scrollTimer = setTimeout(function(){
            initY = null;
            isScrolling = false;
            enableScrolling();
        },100);
    }
    
    function changeSections(){
        $current = $("section.current");
        $next = $current.next("section.future");
        $prev = $current.prev("section.past");
        if(direction == "down" && $next.length){
            $next.removeClass("future").addClass("current");
            $current.removeClass("current").addClass("past");
        } else if(direction == "up" && $prev.length){
            $prev.removeClass("past").addClass("current");
            $current.removeClass("current").addClass("future");
        }
    }
});
