// Your scripts go here.

console.log('hello world!');

var isScrolling = false;
$(window).on("scroll",function(){
    isScrolling = true;
    console.log("shit is scrolling!!");
});