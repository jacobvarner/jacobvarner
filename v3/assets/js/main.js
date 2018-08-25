$("document").ready(function() {
  $(".project").click(function(event) {
    var id = $(this).attr("id");
    $(".dark-background").css("display", "block");
    $("#" + id + " > .project-pop-up").addClass("project-pop-up-open");
  });

  $(".dark-background").click(function() {
    $(".dark-background").css("display", "none");
    $(".project-pop-up-open").removeClass("project-pop-up-open");
  });

  $("#announcement-close").click(function(event) {
    $("#header-announcement").css("display", "none");
    if (window.outerWidth > 800) {
      $("#main-icons").css("margin", "160px 20px 100px");
    } else {
      $("#main-icons").css("margin", "180px 20px 40px")
    }
  });
});
