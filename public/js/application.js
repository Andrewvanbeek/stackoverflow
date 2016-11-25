$(document).ready(function() {
  $( "#lglink" ).on("mouseenter", function(e) {
    e.preventDefault();
    $("#logout").fadeToggle();
  });
   $( "#loggingout" ).on("mouseleave", function(e) {
    e.preventDefault();
    $("#logout").hide();
  });
     $( "#lginlink" ).on("mouseenter", function(e) {
    e.preventDefault();
    $("#login").fadeToggle();
  });
   $( "#loggingin" ).on("mouseleave", function(e) {
    e.preventDefault();
    $("#login").hide();
  });
});
