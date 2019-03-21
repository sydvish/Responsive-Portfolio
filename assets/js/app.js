$(document).ready(function() {
  $(".w3-bar-item w3 button").on("click", function(e){
    var $target = $($(this).attr("data-target"));
    $("html, body").animate(
      {
        scrollTop: $target.offset().top
      },
      1000
    );
  });

});
