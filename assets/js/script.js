$(function(){
        //스크롤 버튼 애니메이션
        $('.btnM').click(function(){
            $('html,body').animate({scrollTop : 760}, 500);
            return false;
        });
        
        $('.btnI').click(function(){
            $('html,body').animate({scrollTop : 1520}, 500);
            return false;
        });
        
        $('.btnS').click(function(){
            $('html,body').animate({scrollTop : 2280}, 500);
            return false;
        });
        
        $('.btnC').click(function(){
            $('html,body').animate({scrollTop : 3040}, 500);
            return false;
        });
    
        $('.btnH').click(function(){
            $('html,body').animate({scrollTop : 0}, 500);
            return false;
        });
        
        //업다운 스크롤 애니메이션
        window.onload = function () {
            var elm = ".box";
            $(elm).each(function (index) {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } 
                    else if (event.detail)
                        delta = -event.detail / 3;
                    var moveTop = $(window).scrollTop();
                    var elmSelecter = $(elm).eq(index);
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {
                            try{
                                moveTop = $(elmSelecter).next().offset().top;
                            }catch(e){}
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
                            try{
                                moveTop = $(elmSelecter).prev().offset().top;
                            }catch(e){}
                        }
                    }
                    // 화면 이동 0.6초(600)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 600, complete: function () {
                        }
                    });
                });
            });
        };
        
        //swiper
        var swiper = new Swiper('.swiper-container',{
            pagination: {
                el: '.swiper-pagination',
                clickable: 'trues',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
            },
        });
    
        //SKILL PERCENT
        $(window).scroll($.throttle(500, function(){
            var sct = $(window).scrollTop(),
                skill = $('#skill').offset();

            if (sct > skill.top-150) {
                var skillmain=$('.skill_list>div');

                skillmain.each(function(){
                    var progressWrap=$(this).find(".gauge"),
                        progressBar=progressWrap.find(".bar"),
                        progressText=progressWrap.next(".percent"),
                        progressNum=progressText.attr("data-num");

                    progressBar.animate({ width: progressNum + "%"}, 2000);
                    setInterval(textNum, 1000 / 10);

                    function textNum() {
                        var currentWidth = progressBar.width() / progressWrap.width() * 100;
                        progressText.text(Math.ceil(currentWidth) + "%");
                    };

                });	
            };
        }));
        
    
    
        
});