$(".box .cardList a img").hover(
  function () {
    $(this).next().next().stop().fadeIn(500);
  },
  function () {
    $(this).next().next().stop().fadeOut(400);
  }
);
