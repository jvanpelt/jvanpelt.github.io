$('document').ready(function(){
    
    enableScrolling();
    var isScrolling = false;
    var scrollTimer;
    //var initX;
    var initY;
   
    function disableScrolling(){
        console.log("disable");
        window.onscroll=function(e){
            window.scrollTo(0, 2);
            scrollAction();
        };
    }
    
    function enableScrolling(){
        console.log("enable");
        window.scrollTo(0, 2);
        window.onscroll=function(){
            console.log("scroll y: " + window.scrollY);
            if(!initY){
                initY = 2;
            } else if (window.scrollY > initY + 5 || window.scrollY < initY){
                disableScrolling();
            }
        };
    }
    
    function scrollAction(){
        console.log("trying to scroll");
        
        if(!isScrolling){
        }
        
        isScrolling = true;
        clearTimeout(scrollTimer);
        
        scrollTimer = setTimeout(function(){
            initY = null;
            isScrolling = false;
            console.log("scrolling is done!");
            enableScrolling();
        },100);
    }
});
