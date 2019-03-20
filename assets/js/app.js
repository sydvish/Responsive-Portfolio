$(document).ready(function() {
  $(".w3-bar-item").on("click", function(e){
    var $target = $($(this).attr("data-target"));
    $("html, body").animate(
      {
        scrollTop: $target.offset().top
      },
      1000
    );
  });

});
