$(".nav-burger-link").on("click", function () {
  $(".nav-burger-link").toggleClass("closed");
  $(".nav-menu").toggleClass("open");
});

$(document).ready(function () {
  $("input").click(function () {
    document.body.classList.toggle("dark");
  });
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".card").fadeIn(400);
      $("li.list.active").removeClass("active");
      $(this).addClass("active");
    } else {
      $("li.list.active").removeClass("active");
      $(this).addClass("active");
      $(".card")
        .not("." + value)
        .fadeOut(400);
      $(".card")
        .filter("." + value)
        .fadeIn(400);
    }
  });
});
