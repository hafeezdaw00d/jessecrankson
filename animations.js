$(document).ready(function() {

  $("#info").click(function() {
    $("#main-text-wrapper").addClass("view");
  });

  $("#button-1").click(function() {
    $("#about").toggle();
  });

  $("#button-2").click(function() {
    $("#contact").toggle();
  });

  $("#button-3").click(function() {
    $("#clients").toggle();
  });

  $("#video").click(function() {
    $("#video-table").toggle();
    $("#photographs").removeClass("");
    $("#photographs").removeClass("active");
    $("#video").addClass("active");
  });

  $("#photographs").click(function() {
    if ($("#video").hasClass("active")) {
     $("#video-table").toggle();
     $("#video").removeClass("active");
     $("#photographs").addClass("active");
     } 
     else {
    $("#video").removeClass("active");
    $("#photographs").addClass("active");
     }
  });

  $(document).on("scroll", function() {

       var pixels = $(document).scrollTop();
       var pageHeight = $(document).height() - $(window).height();
       var progress = 100 * pixels / pageHeight;
  
  $("div.progress").css("height", progress + "%");
     })

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
    pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};
  
});