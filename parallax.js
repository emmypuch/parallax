$(".nav-burger-link").on("click", function () {
  $(".nav-burger-link").toggleClass("closed");
  $(".nav-menu").toggleClass("open");
});

window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});
