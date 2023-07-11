$(document).ready(function() {

    $(window).on("load", function(){
        console.log("script loaded....")
        $(".spinner-grow").hide();
    });

    $(window).on("scroll", function(){
    // console.log("scrolled....");
    if (window.scrollY > 50) {
        $("#menuBar").addClass("fixed-top"); // add padding top to show content behind navbar    
        } else {
        $("#menuBar").removeClass("fixed-top");
        $(document.body).css("padding-top", "0px"); // remove padding top from body                
      } 
    });
});