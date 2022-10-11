$(".widget .tab1").hover(
  function () {
    $(this).contents(".literal").stop().fadeIn(500);
  },
  function () {
    $(this).contents(".literal").stop().fadeOut(200);
  }
);

var flag = true;
scrollplay();
function scrollplay() {
  var t = $(".widget").offset().top;
  if ($(document).scrollTop() > t - 100) {
    $(".Elevator").fadeIn();
  } else {
    $(".Elevator").fadeOut();
  }
}

$(window).scroll(function () {
  scrollplay();
  if (flag) {
    $(".widget1").each(function (i, ele) {
      if ($(document).scrollTop() >= $(ele).offset().top - 200) {
        $(".out").eq(i).addClass("curr").siblings().removeClass("curr");
      }
    });
  }
});

$(".Elevator .out").click(function () {
  flag = false;
  var cur = $(".widget").children().eq($(this).index()).offset().top;
  $("body,html")
    .stop()
    .animate(
      {
        scrollTop: cur,
      },
      function () {
        flag = true;
      }
    );
  $(this).addClass("curr").siblings().removeClass("curr");
});
