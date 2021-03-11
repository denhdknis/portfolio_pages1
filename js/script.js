
//sticky header

  $(function() {
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header')
        fvHeight = $fv.outerHeight(),
        fixedClass = 'fixed';

  $win.on('load scroll',function(){
    var value = $(this).scrollTop();
      if($win.width()>768)

        if ( value > fvHeight) {
          $header.addClass(fixedClass);
        } else {
          $header.removeClass(fixedClass);
        }

    });
  });


  //ファーストビューのslider
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });


  //ハンバーガーメニューの開閉
  $('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $('.burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
  });


  $(function(){
    $('a[href^="#"]').click(function(){
      let speed = 400;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });