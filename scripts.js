$('document').ready(function(){
   
   disableScroll();
   
    var isScrolling = false;
    $(window).on("scroll",function(){
        isScrolling = true;
        console.log("shit is scrolling!!");
    });
});


function disableScroll() {
    if (window.addEventListener){ // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    }
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
}

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault){
        e.preventDefault();
    }
    e.returnValue = false;  
}