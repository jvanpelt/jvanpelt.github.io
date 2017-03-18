$('document').ready(function(){
    
    enableScrolling();
    var isScrolling = false;
    var scrollTimer;
    //var initX;
    var initY;
   
    function disableScrolling(){
        console.log("disable");
        window.onscroll=function(e){
            window.scrollTo(0, 1);
            scrollAction(e);
        };
    }
    
    function enableScrolling(){
        console.log("enable");
        window.scrollTo(0, 1);
        //var x=window.scrollX;
        //var y=window.scrollY;
        window.onscroll=function(){
            console.log("scroll y: " + window.scrollY);
            if(!initY){
                initY = window.scrollY;
            } else if (window.scrollY > initY + 5 || window.scrollY < initY - 1){
                disableScrolling();
            }
        };
    }
    
    function scrollAction(e){
        console.log("trying to scroll");
        
        if(!isScrolling){
            console.log(e);
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
