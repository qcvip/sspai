$(".content .tab li").click(function () {
  $(this).toggleClass("tab1").siblings().removeClass();
});


var time = setInterval(go, 2000);
function go() {
  $(".content .News .scroll .scrolltop").append(
    $(".content .News .scroll .scrolltop").children("div").eq(0)
  );
}
$(".content .News .scroll button").hover(
  function () {
    clearInterval(time);
  },
  function () {
    time = setInterval(go, 2000);
  }
);
$(".content .News .scroll .bb2").click(function () {
  $(".content .News .scroll .scrolltop").prepend(
    $(".content .News .scroll .scrolltop").children("div").eq(5)
  );
});
$(".content .News .scroll .bb1").click(function () {
  $(".content .News .scroll .scrolltop").append(
    $(".content .News .scroll .scrolltop").children("div").eq(0)
  );
});
