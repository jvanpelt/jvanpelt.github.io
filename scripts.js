$('document').ready(function(){
   
    var isScrolling = false;
    $(window).on("scroll",function(){
        isScrolling = true;
        console.log("shit is scrolling!!");
    });
});
