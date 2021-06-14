$(function(){
  $('.achievement__card-wrapper').slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 3000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 4, //表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3, //画面幅750px以下でスライド3枚表示
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2, //画面幅750px以下でスライド3枚表示
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1, //画面幅750px以下でスライド3枚表示
        },
      }
    ]
  });
});

$(function() {
  var $win = $(window),
      $main = $('main'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});

$(function(){
  var imgHeight = $('.firstview').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
  var header = $('.topnav'); //ヘッダーコンテンツ

  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight) {
       //メインビジュアル内にいるので、クラスを外す。
      header.removeClass('topnav__after');
    }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      header.addClass('topnav__after');
    }
  });
});