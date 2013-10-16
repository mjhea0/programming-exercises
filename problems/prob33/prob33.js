$(".btn").click(function() {
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/mjhea0/repos?type=owner&per_page=100",
    dataType: "json",
    success: function(result) {
      for( x in result ) {
        $(".list-group").append(
          "<li class='list-group-item'><a href='" + 
          result[x].html_url + 
          "' target='_blank'>" +
          result[x].name + 
          "</a></li>"
        )
      }
      $("#repo_count").append(" Total: " + result.length);
    }
  })
})



