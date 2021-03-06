$('document').ready(function(){
    
    var isScrolling = false;
    var scrollTimer;
    var initY;
    var direction = "";
    var play = 4; // without a little play scroll up detection stops working
    
    enableScrolling();
   
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
        initY = null;
        isScrolling = false;
        direction = "";
        
        window.scrollTo(0, play);
        window.onscroll=function(){
            if(!initY){
                initY = play;
            } else if (window.scrollY > initY){
                direction = "down";
                disableScrolling();
            } else if(window.scrollY < initY){
                direction = "up";
                disableScrolling();
            }
            console.log("direction: " + direction);
        };
    }
    
    function scrollAction(){
        console.log("I'M NOT SCROLLING");
        
        if(!isScrolling){
            isScrolling = true;
            changeSections();
        }
        
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(enableScrolling,100);
    }
    
    function changeSections(){
        var $current = $("section.current");
        var $next = $current.next("section.future");
        var $prev = $current.prev("section.past");
        
        if(direction == "down" && $next.length){
            console.log("go down");
            $next.removeClass("future").addClass("current");
            $current.removeClass("current").addClass("past");
        } else if(direction == "up" && $prev.length){
            console.log("go up");
            $prev.removeClass("past").addClass("current");
            $current.removeClass("current").addClass("future");
        }
    }
});
