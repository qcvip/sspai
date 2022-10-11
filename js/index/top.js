$(".top .middle .a1")
  .eq(0)
  .hover(
    function () {
      $(".aa1").stop().fadeIn(300);
      console.log("adasd");
    },
    function () {
      $(".aa1").stop().hide();
      $(".aa1").hover(
        function () {
          $(".aa1").stop().show();
        },
        function () {
          $(".aa1").stop().hide();
        }
      );
    }
  );
$(".top .middle .a1")
  .eq(1)
  .hover(
    function () {
      $(".aa2").stop().fadeIn(300);
    },
    function () {
      $(".aa2").stop().hide();
      $(".aa2").hover(
        function () {
          $(".aa2").stop().show();
        },
        function () {
          $(".aa2").stop().hide();
        }
      );
    }
  );

$(".top .middle .a1")
  .eq(2)
  .hover(
    function () {
      $(".aa3").stop().fadeIn(300);
    },
    function () {
      $(".aa3").stop().hide();
      $(".aa3").hover(
        function () {
          $(".aa3").stop().show();
        },
        function () {
          $(".aa3").stop().hide();
        }
      );
    }
  );
