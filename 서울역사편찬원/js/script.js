$(function () {
  let submenu = $('.headerBottomNav nav>ul>li');
  let sub = $('.headerBottomNav nav>ul>li>ul');

  submenu.click(function (e) {
    e.preventDefault();
    e.stopPropagation(); //다른 li를 클릭하면 현재 열려있는 서브메뉴 닫기
    let sub = $(this).find('ul');

    if (sub.is(':visible')) {
      sub.slideUp();
    } else {
      sub.slideDown();
    }
  })


  let line = $('.searchBox .menu>div')
  let nav = $('.headerBottomNav nav');
  //햄버거메뉴
  $('.searchBox .menu').click(function (e) {
    e.preventDefault();
    line.toggleClass('active')
    nav.toggleClass('active')

  });
  $(window).on('resize', function () {
    line.removeClass('active');
    nav.removeClass('active');
    sub.slideUp();
  });

  //스와이퍼
  var swiper = new Swiper(".section01_swiper_Frame", {
    loop: true,
    pagination: {
      el: ".swiper_pagination1",
      type: "fraction",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,

    },
    navigation: {
      nextEl: ".section01_swiper_Frame .swiper-nextBtn1",
      prevEl: ".section01_swiper_Frame .swiper-prevBtn1",
    },
  });


  let sp = 0;
  $('.section01 .swiper_pauseBtn').click(function () {
    if (sp == 0) {
      $(this).attr({ class: "swiper_playBtn" })
      swiper.autoplay.stop();
      sp = 1;
    } else {
      $(this).attr({ class: "swiper_pauseBtn" })
      swiper.autoplay.start();
      sp = 0;
    }
  });

  var swiper3 = new Swiper(".sec3Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {

      768: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,  //브라우저가 1024보다 클 때
        spaceBetween: 50,
      },
    },
  });



  /* $('.tab_con2').on('touchstart touchmove touchend mousewheel wheel', function(e){
    e.stopPropagation();
  }); */
  var swiper2 = new Swiper(".tab_con2", {
    pagination: {
      el: ".swiper_pagination1",
      type: "fraction",
    },

    centeredSlides: true,
    navigation: {
      nextEl: ".tab_con2 .swiper-nextBtn1",
      prevEl: ".tab_con2 .swiper-prevBtn1",
    },
    observer: true,
    observeParents: true,
  });

  var swiper3 = new Swiper(".tab_con3", {
    pagination: {
      el: ".swiper_pagination3",
      type: "fraction",
    },

    centeredSlides: true,
    navigation: {
      nextEl: ".tab_con3 .swiper-nextBtn3",
      prevEl: ".tab_con3 .swiper-prevBtn3",
    },
    observer: true,
    observeParents: true,
  });

  var bullet = ['강좌', '답사', '공모', '논문']
  var swiper1 = new Swiper(".tabslide", {
    spaceBetween: 0,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,//사용자가 슬라이드를 조작해도 자동 넘김이 계속 유지
    },
    pagination: {
      el: ".tab-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<div class=${className}><span>${bullet[index]}</span></div>`
      }
    },
    observer: true,
    observeParents: true,
  });
  let sp1 = 0;
  $('.section05 .swiper_pauseBtn').click(function () {
    if (sp1 == 0) {
      $(this).attr({ class: "swiper_playBtn" })
      swiper1.autoplay.stop();
      sp1 = 1;
    } else {
      $(this).attr({ class: "swiper_pauseBtn" })
      swiper1.autoplay.start();
      sp1 = 0;
    }
  });





  var swiper6 = new Swiper(".popupzonSwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,//사용자가 슬라이드를 조작해도 자동 넘김이 계속 유지
    },

  });
  let sp6 = 0;
  $('.section06 .swiper_pauseBtn').click(function () {
    if (sp6 == 0) {
      $(this).attr({ class: "swiper_playBtn" })
      swiper6.autoplay.stop();
      sp6 = 1;
    } else {
      $(this).attr({ class: "swiper_pauseBtn" })
      swiper6.autoplay.start();
      sp6 = 0;
    }
  });



  //모아보기 모달창 section06 moreBtn

  let popup = $('.section06More')
  $('.more').click(function () {
    popup.fadeIn(500)
  });
  $('.closeBtn').click(function () {
    popup.fadeOut(500)
  });




  //secion07스와이퍼
  var swiper7 = new Swiper(".gridSwiper", {
    slidesPerView: 2,
    grid: {
      rows: 2,
      fill: "row",
    },
    slidesPerGroup: 2,
    rewind: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination7",
      clickable: true,
    },
    /* loop: true, */
    navigation: {
      nextEl: ".swiper-button-next7",
      prevEl: ".swiper-button-prev7",
    },
    breakpoints: {
      960: {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row",
        },
        slidesPerGroup: 4,
      },
      720: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        },
        slidesPerGroup: 3,
      }
    }
  });


 //토글
  $('.familysite .btn').click(function () {
    $(this).toggleClass('on');
    $('.sitebox').toggleClass('on');
  });



  //랜덤 이미지
  const randomNum = Math.floor(Math.random() * 4) + 1;

  // 이미지 경로 설정
  const newImgPath = `./img/icon/footer/footer0${randomNum}.png`;
  console.log(randomNum);

  // 이미지 변경
  $('#footerImg').attr('src', newImgPath);



  //스크롤 탑
  $(window).scroll(function(){
      if($(this).scrollTop() > 800){
        $('.scrollTopBtn').fadeIn();
      }else{
        $('.scrollTopBtn').fadeOut();
      }
  });

  $('.scrollTopBtn').click(function(){
    $('html, body').animate({
        scrollTop:0
    },600);
  });

});
