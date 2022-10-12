$(function () {
  var imgLis = $("#Rotation>ul li");
  console.log(imgLis.length);
  for (i = 0; i < imgLis.length; i++) {
    $("<i order=" + i + "></i>").appendTo(".order");
    console.log(i);
  }
  $(".order i").eq(0).addClass("on");
  imgLis.first().clone().appendTo("#Rotation ul");
  $("#Rotation ul").width($("#Rotation ul li").width() * (imgLis.length + 2));
  var num = 0;
  play();
  function play() {
    if (num < 0) {
      num = imgLis.length - 1;
     $("#Rotation>ul").css({ left: -imgLis.length * 100 + "px" });
    }
    if (num > imgLis.length) {
      num = 1;
      $("#Rotation>ul").css({ left: "0" });
    }
    var left = num * 2760;
    $("#Rotation>ul").animate({ left: -left + "px" }, function () {
      state = true;
    });
    $(".order i").removeClass("on");
    $(".order i").eq(num).addClass("on");
    if (num >= imgLis.length) {
      $(".order i").first().addClass("on");
    }
  }
  function autoPlay() {
    timer = setInterval(function () {
      num++;
      play();
    }, 3000);
  }
  $("#Rotation")
    .mouseover(function () {
      clearInterval(timer);
      timer = null;
    })
    .mouseout(function () {
      autoPlay();
    });
  $(".prev").click(function () {
    if (state == true) {
      state = false;
      num--;
      console.log(num);
      play();
    }
  });
  $(".next").click(function () {
    if (state == true) {
      state = false;
      num++;
      play();
    }
  });
  $(".order i").click(function () {
    num = $(this).index();
    play();
  });
  autoPlay();
});
