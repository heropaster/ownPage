  //Всплытие элементов меню
  $(".menu li").on("mouseover touchstart", function() {
      let idx = $(this).index();
      $(".goo li").removeClass("hover");
      $("nav li").eq(idx).addClass("hover");
    }).on("mouseout touchend", function() {
      $("nav li").removeClass("hover");
    });
  //Появление меню при наведении на триггер
  let menuTimer;

  $(".menu__trigger").on("mouseover touchstart", function() {
    clearTimeout(menuTimer);
    $(".menu__container").slideDown(250);
    $(".menu__trigger").animate({ opacity: "0" }, 150);
  });

  $("body").on("mouseleave", function() {
    menuTimer = setTimeout(function() {
      $(".menu__container").slideUp(function() {
        $(".menu__trigger").animate({ opacity: "1" }, 150);
      });
    }, 200);
  });
