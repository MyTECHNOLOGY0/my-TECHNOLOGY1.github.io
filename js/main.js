(function ($) {
    "use strict";
  
    const issues = [
      {
        title: "بطء برامج تخصصية (AutoCAD، VirtualBox، MATLAB)",
        description: "",
        link: "course-details9.html"
    },
      {
        title: "  مشاكل الأقفال الذكية بسبب المحول",
        description: "",
        link: "course-details8.html"
    },
      {
        title: " بطء الأجهزة بسبب نوع الهارد ديسك (HDD)",
        description: "",
        link: "course-details7.html"
    },
      {
        title: " تعطل أجهزة البروجكتر بسبب حذف الدرايفر",
        description: "",
        link: "course-details6.html"
    },
      {
        title: " مشاكل السعة التخزينية",
        description: "",
        link: "course-details5.html"
    },
      {
        title: " تعليق تسجيل الدخول إلى ويندوز",
        description: "",
        link: "course-details4.html"
    },
      {
        title: " خروج أجهزة الحاسب من دومين الكلية",
        description: "",
        link: "course-details3.html"
    },
        {
            title: "صعوبة الدخول على حساب المتدرب",
            description: "",
            link: "course-details0.html"
        },
        {
            title: " تعليق الشبكة",
            description:" ",
            link: "course-details1.html"
        },
      {
          title: "حسابات المتدربين لا تعمل على أجهزة معينة",
          description: "",
          link: "course-details2.html"
      },
   
    ];
  
    /*------------------------------------
      Sticky Menu 
  --------------------------------------*/
    var windows = $(window);
    var stick = $(".header-sticky");
    windows.on("scroll", function () {
      var scroll = windows.scrollTop();
      if (scroll < 5) {
        stick.removeClass("sticky");
      } else {
        stick.addClass("sticky");
      }
    });
    /*------------------------------------
      jQuery MeanMenu 
  --------------------------------------*/
    $(".main-menu nav").meanmenu({
      meanScreenWidth: "767",
      meanMenuContainer: ".mobile-menu",
    });
  
    /* last  2 li child add class */
    $("ul.menu>li").slice(-2).addClass("last-elements");
    /*------------------------------------
      Owl Carousel
  --------------------------------------*/
    $(".slider-owl").owlCarousel({
      loop: true,
      nav: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      smartSpeed: 2500,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  
    $(".partner-owl").owlCarousel({
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  
    $(".testimonial-owl").owlCarousel({
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    /*------------------------------------
      Video Player
  --------------------------------------*/
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      zoom: {
        enabled: true,
      },
    });
  
    $(".image-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    /*----------------------------
      Wow js active
  ------------------------------ */
    new WOW().init();
    /*------------------------------------
      Scrollup
  --------------------------------------*/
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });
    /*------------------------------------
      Nicescroll
  --------------------------------------*/
    $(".notice-left").niceScroll({
      cursorcolor: "#EC1C23",
      cursorborder: "0px solid #fff",
      autohidemode: false,
    });
  
    /*-----------------------
          Search Toggle
      ------------------------- */
    let searchSelector = document.querySelector(".search-toggle");
    let searchBox = document.querySelector(".search");
    if (searchSelector) {
      searchSelector.addEventListener("click", function () {
        searchBox.classList.toggle("open");
      });
    }
  
    $("#search").on("submit", function (e) {
      e.preventDefault();
      
      const formdata = new FormData(e.target); 
      const searchQuery = formdata.get("search");
      document.getElementById("issues-container").innerHTML = "";
      
      issues.forEach(function (issue) {
        if (issue.title.toLowerCase().includes(searchQuery.toLowerCase())) {
          let itemElemnt = `
          <div class="col-lg-4 col-md-6">
                      <div class="single-course mb-70">
                          <div class="course-img">
                           
                                  <div class="course-hover">
                                      <i class="fa fa-link"></i>
                                  </div>
                              </a>
                          </div>
                          <div class="course-content">
                              <h3><a href="${issue.link}">${issue.title}</a></h3>
                              <h3>${issue.description}</a></h3>
                              
                          
                             
                          </div>   
                      </div>
                  </div>
        `;
          document.getElementById("issues-container").innerHTML += itemElemnt;
        }
      });
    });
  
    issues.forEach(function (issue) {
      let itemElemnt = `
          <div class="col-lg-4 col-md-6">
                      <div class="single-course mb-70">
                          <div class="course-img">
                           
                                  <div class="course-hover">
                                      <i class="fa fa-link"></i>
                                  </div>
                              </a>
                          </div>
                          <div class="course-content">
                               <h3><a href="${issue.link}">${issue.title}</a></h3>
                              <h3>${issue.description}</a></h3>
                          
                             
                          </div>   
                      </div>
                  </div>
          `;
      document.getElementById("issues-container").innerHTML += itemElemnt;
    });
  })(jQuery);
