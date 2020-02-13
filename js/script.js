var $win = $(window);
$win.on('load resize', function() {
  var windowWidth = window.innerWidth;
  if (windowWidth >= 1024) {
    $('.message_SP').addClass('SP__hidden');
    $('.message_PC').removeClass('SP__hidden');
// 
// FVが画面外に出た際、表示位置を一番上に戻す
// 
      $('.fv, .fv__cpsite').on('inview', function(event, isInView) {
        if (isInView) {
          $(".inner").addClass("fv__cpsite_inner")
        } 
        else {
          $(".inner").removeClass("fv__cpsite_inner")
        }
      });
// 
// コンテンツのフェードイン
// 
    jQuery(function(){
      jQuery(window).scroll(function (){
          jQuery('.fadein').each(function(){
              var elemPos = jQuery(this).offset().top;
              var scroll = jQuery(window).scrollTop();
              var windowHeight = jQuery(window).height();
              if (scroll > elemPos - windowHeight + 200){
                  jQuery(this).addClass('scrollin');
              }
          });
      });
      jQuery(window).scroll();
    });
  } else if (windowWidth < 1024) {
// 
// PC以下のサイズになった際、コンテンツフェードインの消去
// 
    $('.fadein').removeClass('fadein');
// 
// PC版とSP版での文字の調整
// 
    $('.message_SP').toggleClass('SP__hidden');
    $('.message_PC').toggleClass('SP__hidden');
};
$(function(){
//
// ハンバーガーメニュー
//
  $('.btn_trigger').on('click',function(){
    $('.btn_trigger').toggleClass('btn_close');
    $('body').toggleClass('noscroll')
    $('#header').toggleClass('header__nav_wrapper');
    $('#header>nav').toggleClass('SP__hidden');
  });
  if( $(window).width()<1023 ){
    $('#header>nav').addClass('SP__hidden');
    $('.header__item>a').on('click',function(){
      $('.btn_trigger').removeClass('btn_close');
      $('header').toggleClass('header__nav_wrapper');
      $('body').removeClass('noscroll');
      $('.#header>nav').toggleClass('SP__hidden');
    });
// 
// フッターの見た目変更
// 
    $('.footer__menu>ul>li, .footer__menu>a>h2>span').addClass('SP__hidden');
    };
// 
// PC版に戻した際にヘッダーととフッターを元に戻す
// 
    if( $(window).width()>=1024 ){
      $('#header>nav').removeClass('SP__hidden');
      $('.footer__menu>ul>li, .footer__menu>a>h2>span').removeClass('SP__hidden');
    }; 
  });
});
