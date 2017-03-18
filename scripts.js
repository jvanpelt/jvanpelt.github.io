$('document').ready(function(){
   
    var isScrolling = false;
    $('body').on("scroll",function(){
        isScrolling = true;
        console.log("shit is scrolling!!");
    });
});
