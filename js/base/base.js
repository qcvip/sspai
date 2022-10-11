$(function () {
  var container = $(".waterfull ul");
  var loading = $("#imloading");
  loading.data("on", true);
  container.imagesLoaded(function () {
    container.masonry({
      columnWidth: 320,
      itemSelector: ".item",
      isFitWidth: true, //是否根据浏览器窗口大小自动适应默认false
      isAnimated: true, //是否采用jquery动画进行重拍版
      isRTL: true, //设置布局的排列方式，即：定位砖块时，是从左向右排列还是从右向左排列。默认值为false，即从左向右
      isResizable: true, //是否自动布局默认true
      animationOptions: {
        duration: 800,
        easing: "easeInOutBack", //如果你引用了jQeasing这里就可以添加对应的动态动画效果，如果没引用删除这行，默认是匀速变化
        queue: false, //是否队列，从一点填充瀑布流
      },
    });
  });
  /*模拟从后台获取到的数据*/
  var sqlJson = [
    {
      title: "掌机版 PS5 研发中？",
      intro:
        "爆料人 Zuby_tECH 日前发现了索尼的两份英雄帖，都与 PlayStation 新机研制...",
      src: "./img/base/t9.jpg",
    },
    {
      title: "马斯克中国分马微博被禁言，网友怀疑其使用 Al 换脸技术",
      intro:
        "据悉，该男子因长相酷似马斯克，发布了一些效仿马斯克的视频并在网上走红了...",
      src: "./img/base/t10.jpg",
    },
    {
      title: "又一车企宣布涨价，上汽大众新能源车型上调 3000 元至 5000 元不等",
      intro:
        "从上汽大众官网发现，上汽大众对旗下新能源车型涨价3000至5000元不等，另...",
      src: "./img/base/t11.jpg",
    },
    {
      title: "比 Switch 更轻！AYANEO AIR 发布会定档 5 月 14 日",
      intro:
        "AYANEO 掌机官方宣布，将在 5 月 14 日上午 10 点 30 分，召开 AYANEO 20...",
      src: "./img/base/t12.jpg",
    },
    {
      title: "【探店】南京第一家无印良品世界旗舰店-追忆 2018 年",
      intro:
        "继 14 年成都太古里和 15 年上海淮海路无印世界旗舰店开业，无印高层看到了前...",
      src: "./img/base/t13.jpg",
    },
    {
      title: "回看旧图，对拍照的一点点思考",
      intro:
        "居家办公期间得以有机会把原来的老照片拿出来重新品味一下，想想怎么可以拍...",
      src: "./img/base/t14.jpg",
    },
    {
      title: "关于用 iPad mini 读书这件事",
      intro:
        "我始终不是电子书的忠实拥趸，买了 4 年的 Kindle 大部分时间都在吃灰，但...",
      src: "./img/base/t15.jpg",
    },
    {
      title: "【咖啡角】差生文具多|布置新房咖啡角",
      intro:
        "新房装修好，搁置已有半年，几个月前刚刚搬完所有大件家具，后脚就碰上突如...",
      src: "./img/base/t16.jpg",
    },
    {
      title: "佳能发布 EOS R7 / R10 两款“青春专微”相机：5399 元起",
      intro:
        "佳能（中国）有限公司宣布推出两款 EOS R 系统 APS-C 画幅专微相机：EOS R7 和...",
      src: "./img/base/t17.jpg",
    },
    {
      title: "8499 元起，索尼技术旗舰微单手机 Xperia 1 IV 国行版发布",
      intro:
        "022 年 5 月 23 日，索尼中国宣布推出技术旗舰微单™手机 Xperia 1 IV 国行版，速度...",
      src: "./img/base/t18.jpg",
    },
    {
      title: "高效办公会议标配，iFLYBUDS Pro 录音降噪会议耳机正式发布",
      intro:
        "5 月 17 日，未来智能公司正式发布全新录音降噪会议耳机 iFLYBUDS Pro。这是...",
      src: "./img/base/t19.jpg",
    },
    {
      title: "iOS 16 因为 BUG 太多，测试版可能要延期推出",
      intro:
        "根据爆料人 Mark Gurman 透露的消息，iOS 16 测试版将会比平时晚一些推出...",
      src: "./img/base/t20.jpg",
    },
  ];
  /*本应该通过ajax从后台请求过来类似sqljson的数据然后，便利，进行填充，这里我们用sqlJson来模拟一下数据*/
  var j = 4;
  var i = 0;
  $(window).scroll(function () {
    if (!loading.data("on")) return;
    // 计算所有瀑布流块中距离顶部最大，进而在滚动条滚动时，来进行ajax请求，方法很多这里只列举最简单一种，最易理解一种
    var itemNum = $("#waterfull").find(".item").length;
    var itemArr = [];
    var maxTop = Math.max.apply(null, itemArr);

    if (maxTop < $(window).height() + $(document).scrollTop()) {
      loading.data("on", false).fadeIn(800);
      (function (sqlJson) {
        /*这里会根据后台返回的数据来判断是否你进行分页或者数据加载完毕这里假设大于30就不在加载数据*/
        if (itemNum > 19) {
          loading.text("就有这么多了！");
        } else {
          var html = "";
          for (i; i < j; i++) {
            html +=
              "<li class='item'><a href='####' class='a-img'><img src='" +
              sqlJson[i].src +
              "'></a>";
            html += "<h2 class='li-title'>" + sqlJson[i].title + "</h2>";
            html +=
              "<p class='description'>" +
              sqlJson[i].intro +
              "</p><div class='qianm clearfloat'>";
          }
          i = j;
          j = j + 4;
          /*模拟ajax请求数据时延时800毫秒*/
          var time = setTimeout(function () {
            $(html)
              .find("img")
              .each(function (index) {
                loadImage($(this).attr("src"));
              });
            var $newElems = $(html).css({ opacity: 0 }).appendTo(container);
            $newElems.imagesLoaded(function () {
              $newElems.animate({ opacity: 1 }, 800);
              container.masonry("appended", $newElems, true);
              loading.data("on", true).fadeOut();
              clearTimeout(time);
            });
          }, 1500);
        }
      })(sqlJson);
    }
  });
  function loadImage(url) {
    var img = new Image();
    // 创建一个Image对象，实现图片的预下载
    img.src = url;
    if (img.complete) {
      return img.src;
    }
    img.onload = function () {
      return img.src;
    };
  }
});
