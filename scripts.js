$('document').ready(function(){
    
    disableScrolling();
    var isScrolling = false;
    var scrollTimer;
   
    function disableScrolling(){
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(e){
            console.log("y: " + y);
            window.scrollTo(0, 0);
            scrollAction(e);
        };
    }
    
    function enableScrolling(){
        window.onscroll=function(){};
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
        },100);
    }
});
