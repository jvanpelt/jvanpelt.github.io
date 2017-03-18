$('document').ready(function(){
    
    disableScrolling();
    var isScrolling = false;
   
    function disableScrolling(){
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(){
            window.scrollTo(0, 1);
            scrollAction();
        };
    }
    
    function enableScrolling(){
        window.onscroll=function(){};
    }
    
    function scrollAction(){
        console.log("trying to scroll");
        
        isScrolling = true;
        clearTimeout(scrollTimer);
        
        scrollTimer = setTimeout(function(){
            isScrolling = false;
            console.log("scrolling is done!");
        },100);
    }
});
