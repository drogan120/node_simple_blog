$(document).ready(function () {
  $(".delete-post").on("click", function (e) {
    $target = $(e.target);
    const id = $target.attr("data-id");
    $.ajax({
      type: "DELETE",
      url: "/posts/" + id,
      success: function (response) {
        alert("post has been deleted");
        window.location.href = "/posts";
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});

$(document).ready(function () {
  $(".delete-tag").on("click", function (e) {
    $target = $(e.target);
    const id = $target.attr("data-id");
    $.ajax({
      type: "DELETE",
      url: "/tags/" + id,
      success: function (response) {
        alert("tag has been deleted");
        window.location.href = "/tags";
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});
