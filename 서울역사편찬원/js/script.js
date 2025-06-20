
$(function(){
    let submenu=$('.headerBottomNav nav>ul>li');
    let sub= $('.headerBottomNav nav>ul>li>ul');

    submenu.click(function(e){
        e.preventDefault();
        e.stopPropagation(); //다른 li를 클릭 시 현재 열려 있는 서브메뉴 닫기 방지
        let sub=$(this).find('ul');

        if(sub.is(':visible')){
            sub.slideUp()
        }else{
            sub.slideDown()
        }

    })


    let line= $('.searchBox .menu>div');
    let nav= $('.headerBottomNav nav');
    //햄버거 메뉴
    $('.searchBox .menu').click(function(e){
        e.preventDefault();
        line.toggleClass('active')
        nav.toggleClass('active')
    });

    $(window).on('resize', function(){
        line.removeClass('active');
        nav.removeClass('active');
        sub.slideUp();
    });




    //스와이퍼
    var swiper = new Swiper(".section01_swiper_Frame", {
      pagination: {
        el: ".swiper_pagination",
        type: "fraction",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        loop:true,
      },
      navigation: {
        nextEl: ".swiper-nextBtn",
        prevEl: ".swiper-prevBtn",
      },
    });
    let sp=0;
    $('.section01 .swiper_pauseBtn').click(function(){
        if(sp==0){
            $(this).attr({class:"swiper_playBtn"})
            swiper.autoplay.stop();
            sp=1;
        }else{
            $(this).attr({class:"swiper_pauseBtn"})
            swiper.autoplay.start();
            sp=0;
        }
    });
})