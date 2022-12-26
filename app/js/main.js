$(function() {
    //icon-search
    $("#search").click(function() {
        $(".menu-item").addClass("hide-item");
        $(".header__search-form").addClass("active");
        $(".close").addClass("active");
        $("#search").hide();
    })
    $(".close").click(function() {
        $(".menu-item").removeClass("hide-item");
        $(".header__search-form").removeClass("active");
        $(".close").removeClass("active");
        $("#search").show();
    })

    //sticky scroll header
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header__top-inner");
        header.classList.toggle("sticky", window.scrollY > 0 );
    })

    //slider
    $(".slider__inner").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true
    });

    //Load more
    $('#loadMore').click(function () {
        $('#boxs .box:hidden').slice(0, 4).slideDown()
        if (($('#boxs .box:hidden')).length == 0) {
            $('#loadMore').fadeOut('slow')
        }
    });

     //Load more new items
     $('#newItemsLoadMore').click(function () {
        $('#newBoxs .newBoxs:hidden').slice(0, 4).slideDown()
        if (($('#newBoxs .newBoxs:hidden')).length == 0) {
            $('#newItemsLoadMore').fadeOut('slow')
        }
    });

    // Collections slider
    $(".collections__inner").slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    });

    //hamburger
    $('.hamburger').click(function () {
        $(this).toggleClass('on')
        $('.header__top').toggleClass('off');
        $('.sales-leaders__discount').toggleClass('off');
        $('.new-items__discount').toggleClass('off');
        $('.slick-arrow').toggleClass('off');  
    });

    //sidebar
    $('ul.main-menu li').click(function(e) {
        e.preventDefault();

        if($(this).siblings('li').find('ul.sidebar__submenu:visible').length) {
            $('ul.sidebar__submenu').slideUp('normal');
        }
        $(this).find('ul.sidebar__submenu').slideToggle('normal');
    });

    var t1 = new TimelineMax({ paused: true });

    t1.to('.menu', 0.3, {
        autoAlpha: 1
    });

    t1.staggerFrom(
        '.main-menu li a:not(.sidebar__submenu li a)',
        1,
        {
            opacity: 0,
            y: 10, 
            ease: Power3.easeInOut
        },
        0.1
    );

    t1.from('.sidebar__submenu', 0.3, {
        autoAlpha: 0
    })

    t1.reverse();

    $(document).on('click', '.menu-btn', function() {
        t1.reversed(!t1.reversed());
    });

    $(document).on('click', '.close-menu', function() {
        t1.reversed(!t1.reversed());
    });

    //cursor
    let cursor = $('.cursor'),
        follower = $('.cursor-follower');

    let posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;  

    TweenMax.to({}, 0.016, {
        repeat: - 1,
          onRepeat: function () {
            posX += (mouseX - posY) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 20,
                    top: posY - 20
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX - 65,
                    top: mouseY - 65
            }
          });
        }
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    $('.js-slider').on("mouseenter", function() {
        cursor.addClass('active');
        follower.addClass('active');
    });

    $('.js-slider').on("mouseleave", function() {
        cursor.removeClass('active');
        follower.removeClass('active');
    });

    $('.js-slider-btn').on("mouseenter", function() {
        cursor.addClass('hoverBtn');
    });

    $('.js-slider-btn').on("mouseleave", function() {
        cursor.removeClass('hoverBtn');
    });


});
