$(function() {
  $("#blanks form").submit(function() {
    $(".person").empty().append($("input#person").val());
    $(".adjective").empty().append($("input#adjective").val());
    $(".noun").empty().append($("input#noun").val());
    $(".insect").empty().append($("input#insect").val());
    $(".noun2").empty().append($("input#noun2").val());
    $(".verb").empty().append($("input#verb").val());
    $("#story").show();
    return false;
  })
})
