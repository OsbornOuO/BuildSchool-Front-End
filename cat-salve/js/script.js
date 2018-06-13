$(function(){
    $('.menu-toggle').click(function(e){
        e.preventDefault();
        $(this).siblings("ul").slideToggle();
        $(this).find("i").toggleClass("fa-caret-down").toggleClass("fa-caret-up");
    });
    $('body').click(function(e){
        if($(e.target).parents(".main-menu").length<1)
        {
            $(".main-menu ul").slideUp();
            $(".main-toggle i").removeClass("Fa-caret-up").addClass("fa-carent-down");
        }
    });
});