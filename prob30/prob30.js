$(function() {

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  })

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  })

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  })

  $("button#white").click(function() {
  	$("body").removeClass();
  })

})
