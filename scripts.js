$('document').ready(function(){
    
    disableScrolling();
    var isScrolling = false;
    var scrollTimer;
    var initX;
    var initY;
   
    function disableScrolling(){
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(e){
            window.scrollTo(0, 1);
            scrollAction(e);
        };
    }
    
    function enableScrolling(){
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(){
            if(!initX){
                initX = x;
                initY = y;
            } else if (y > initY + 5 || y < initY - 5){
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
            isScrolling = false;
            console.log("scrolling is done!");
            window.scrollTo(0, 1);
            enableScrolling();
        },100);
    }
});
