$(document).ready(function () {
  var typed = new Typed(".typed", {
    strings: ["Family Owned and Operated"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
});

$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});