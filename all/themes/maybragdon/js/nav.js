// NAVIGATION TRANISTION
// --------------------------------------------
// Upon scrolling change RCL Navbar from the default postion to fixed
// at the moment it touched the top of the browser. To prevent the page
// from jumping we display an empty spacer that is the same height as
// the navbar.

(function ($) {
$(window).scroll(function() {
    if ($(this).scrollTop() > 34){
        $('.navbar').addClass("fixed"); // Navbar moves to position:fixed
        $('.cover').addClass("jump"); // Spacer
        $('.navbar-default').addClass("fixed");
    }
    else{
        $('.navbar').removeClass("fixed");
        $('.cover').removeClass("jump");
        $('.navbar-default').removeClass("fixed");
    }
});
})(jQuery);
