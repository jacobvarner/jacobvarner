$("document").ready(function() {
  $(".project").click( function(event) {
    var id = $(this).attr("id");
    $(".dark-background").css("display", "block");
    $("#" + id + " > .project-pop-up").addClass("project-pop-up-open");
  });

  $(".dark-background").click( function() {
    $(".dark-background").css("display", "none");
    $(".project-pop-up-open").removeClass("project-pop-up-open");
  });
});
