$(document).ready(function (){
$("#header").mouseenter(function () {
    $("#header").stop().animate({"height" :"263px"});
    $(".sub").stop().fadeIn();
});
$("#header").mouseleave(function () {
    $("#header").stop().animate({"height" :"143px"});
    $(".sub").stop().fadeOut();
});
});

