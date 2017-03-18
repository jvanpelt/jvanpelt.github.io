$('document').ready(function(){
    
    disableScrolling();
    var isScrolling = false;
    var scrollTimer;
   
    function disableScrolling(){
        window.onscroll = scrollAction;
    }
    
    function enableScrolling(){
        window.onscroll=function(){};
    }
    
    function scrollAction(){
        var x=window.scrollX;
        var y=window.scrollY;
        window.scrollTo(x, y);
        
        console.log("trying to scroll");
        
        isScrolling = true;
        clearTimeout(scrollTimer);
        
        scrollTimer = setTimeout(function(){
            isScrolling = false;
            console.log("scrolling is done!");
        },100);
    }
});
