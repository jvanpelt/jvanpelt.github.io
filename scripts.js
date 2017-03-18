$('document').ready(function(){
    
    disableScrolling();
   
    function disableScrolling(){
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(){
            console.log("trying to scroll, anyway");
            window.scrollTo(x, y);
        };
    }
    
    function enableScrolling(){
        window.onscroll=function(){};
    }
});
