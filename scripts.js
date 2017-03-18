$('document').ready(function(){
    
    disableScrolling();
    var isScrolling = false;
    var scrollTimer;
   
    function disableScrolling(){
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(e){
            window.scrollTo(0, 1);
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
        },100);
    }
});
