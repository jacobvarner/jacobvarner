$(function() {
  $(".project").on("click", function() {
    $(".dark-background").css("display", "block");
    $(this).find(".project-pop-up").addClass("project-pop-up-open");
    return false;
  });

  $(".dark-background").on("click", function() {
    $(".dark-background").css("display", "none");
    $(".project-pop-up").removeClass("project-pop-up-open");
    return false;
  });
});
