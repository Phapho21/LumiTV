jqv(document).ready(function() {

  // 탑버튼
  jqv(".topIcon").bind("click", function() {
    jqv(".conBottomInner").animate({ scrollTop: 0 });
  });

  // 본문 탭메뉴
  // 디바이스 체크 마우스 오버 이벤트
  var isAndroid = navigator.userAgent;
  var thisPlatform = true;
  isAndroid = isAndroid.indexOf("Android") < 0 ? false : true;

  if (navigator.platform == "iPhone" || navigator.platform == "iPad" || navigator.platform == "iPod" || isAndroid) {} else {
    jqv(".tabBox li a").mouseenter(function() {
      jqv(this).addClass("hover");
    }).mouseleave(function() {
      jqv(this).removeClass("hover");
    });
  }

  //탭바 생성
  if (jqv(".conTop").children().hasClass("tabBoxWrap")) {
    jqv(".tabBoxWrap").append("<div class='tabIndicator'></div>"); //tabIndicator 생성
    jqv(".conTop .tabBox li:first-child a").addClass("active");
    var selfA = jqv(".conTop .tabBox li:first-child a");
    var selfPos = jqv(selfA).position().left;
    var selfWidth = jqv(selfA).width();
    var tabIndicator = jqv(".tabIndicator");
    tabIndicator.css({ left: selfPos, width: selfWidth });
  };

  //탭마우스 오버시 탭바 이동
  jqv(".tabBox li a").mouseenter(function() {
    var selfPos = jqv(this).position().left;
    var selfWidth = jqv(this).width();
    var tabIndicator = jqv(".tabIndicator");
    tabIndicator.stop().animate({ left: selfPos, width: selfWidth }, 200);
  }).mouseleave(function() {
    var pointPos = jqv(".tabBox li a.active").position().left;
    var pointWidth = jqv(".tabBox li a.active").width();
    var tabIndicator = jqv(".tabIndicator");

    tabIndicator.stop().animate({ left: pointPos, width: pointWidth }, 500);
  });

  // 본문 탭 클릭시 이동
  jqv(".tabBox li a").click(function(e) {
    e.preventDefault();
    var movingCon = jqv(".tabList > dt");
    var i = jqv(this).parent().index();
    jqv(this).addClass("active");
    var movingBody = movingCon.eq(i);
    var targetTop = movingBody.position().top;
    //console.log(targetTop);

    if (jqv('.subConInTit').length > 0) {
      jqv(".conBottomInner").stop().animate({ scrollTop: targetTop + jqv(".conTop").outerHeight() - 30 });
      // console.log(targetTop);
    } else {
      jqv(".conBottomInner").stop().animate({ scrollTop: targetTop + 70 });
      // console.log(targetTop);
    }
  });

  // 마우스 스크롤시 탭이동
  jqv(".conBottomInner").scroll(function() {
    jqv(".tabList > dt").each(function(index, el) {
      if (jqv('.subConInTit').length > 0) {
        if (jqv(".conBottomInner").scrollTop() <= jqv(".tabList > dt:first-child").position().top) {
          jqv(".conTop .tabBox li a").removeClass("active");
          jqv(".conTop .tabBox li:first-child a").addClass("active");
          var selfA = jqv(".conTop .tabBox li:first-child a");
          var selfPos = jqv(selfA).position().left;
          var selfWidth = jqv(selfA).width();
          var tabIndicator = jqv(".tabIndicator");
          tabIndicator.stop().animate({ left: selfPos, width: selfWidth }, 200);
        } else if (jqv(".conBottomInner").scrollTop() >= jqv(this).position().top + jqv(".conTop").outerHeight() - 30) {
          jqv(".conTop .tabBox li a").removeClass("active");
          jqv(".conTop .tabBox li").eq(index).children("a").addClass("active");
          var selfA = jqv(".conTop .tabBox li").eq(index).children("a");
          var selfPos = jqv(selfA).position().left;
          var selfWidth = jqv(selfA).width();
          var tabIndicator = jqv(".tabIndicator");
          tabIndicator.stop().animate({ left: selfPos, width: selfWidth }, 200);
        } else if (jqv(".conBottomInner").scrollTop() === jqv(".conBottomInner")[0].scrollHeight - jqv(".conBottomInner")[0].clientHeight && jqv(".conTop .tabBox li:last-child a").hasClass('active') !== true) {
          jqv(".conTop .tabBox li a").removeClass("active");
          jqv(".conTop .tabBox li:last-child a").addClass("active");
          var selfA = jqv(".conTop .tabBox li:last-child a");
          var selfPos = jqv(selfA).position().left;
          var selfWidth = jqv(selfA).width();
          var tabIndicator = jqv(".tabIndicator");
          tabIndicator.stop().animate({ left: selfPos, width: selfWidth }, 200);
        }
      } else {
        if (jqv(".conBottomInner").scrollTop() <= jqv(".tabList > dt:first-child").position().top) {
          jqv(".conTop .tabBox li a").removeClass("active");
          jqv(".conTop .tabBox li:first-child a").addClass("active");
          var selfA = jqv(".conTop .tabBox li:first-child a");
          var selfPos = jqv(selfA).position().left;
          var selfWidth = jqv(selfA).width();
          var tabIndicator = jqv(".tabIndicator");
          tabIndicator.stop().animate({ left: selfPos, width: selfWidth }, 200);
        } else if (jqv(".conBottomInner").scrollTop() >= jqv(this).position().top + 70) {
          jqv(".conTop .tabBox li a").removeClass("active");
          jqv(".conTop .tabBox li").eq(index).children("a").addClass("active");
          var selfA = jqv(".conTop .tabBox li").eq(index).children("a");
          var selfPos = jqv(selfA).position().left;
          var selfWidth = jqv(selfA).width();
          var tabIndicator = jqv(".tabIndicator");
          tabIndicator.stop().animate({ left: selfPos, width: selfWidth }, 200);
        } else if (jqv(".conBottomInner").scrollTop() === jqv(".conBottomInner")[0].scrollHeight - jqv(".conBottomInner")[0].clientHeight && jqv(".conTop .tabBox li:last-child a").hasClass('active') !== true) {
          jqv(".conTop .tabBox li a").removeClass("active");
          jqv(".conTop .tabBox li:last-child a").addClass("active");
          var selfA = jqv(".conTop .tabBox li:last-child a");
          var selfPos = jqv(selfA).position().left;
          var selfWidth = jqv(selfA).width();
          var tabIndicator = jqv(".tabIndicator");
          tabIndicator.stop().animate({ left: selfPos, width: selfWidth }, 200);
        }
      }

    });
  });


  // typography 슬라이드
  jqv('.flexslider').flexslider({
    animation: "slide"
  });

  //타이포탭부분
  jqv(".typeTab .typeTabList li a").click(function(e) {
    e.preventDefault();
    var typeTabIndex = jqv(this).parent().index();
    jqv(this).parent().parent().find('li').removeClass("active");
    jqv(this).parent().addClass("active");
    jqv(this).parents('.typeTab').children('.typeTabCon').children('li').removeClass("active").eq(typeTabIndex).addClass("active");
  });

  //태그링크
  jqv(".tagDl .tagItem").click(function() {
    if (jqv(this).attr("linkTag")) {
      var linkTag = jqv(this).attr("linkTag");
      window.parent.linkTagCall(linkTag);
    }
  });


  //검색페이지 디스플레이 변경
  if (window.parent.location.pathname.indexOf('search.html') > 0) {
    locationText = window.parent.parent.Menu.loactionText(window.location.pathname);
    var urlPath = window.location.pathname.split("component/");
    urlPath = urlPath[1].replace(".html", "");
    jqv("body").attr("onload", "window.parent.searchResultDisplay(this,locationText,'" + urlPath + "')");
  } else {
    jqv("body").attr("onload", "conBottomTop()");
  }

  jqv('.historyDl > dt').click(function() {
    if (jqv(this).hasClass('active')) {
      jqv(this).removeClass('active');
      jqv(this).next().removeClass('active');
    } else {
      jqv('.historyDl > dt, .historyDl > dd').removeClass('active');
      jqv(this).addClass('active');
      jqv(this).next().addClass('active');
    }
  });

});

function conBottomTop() {
  var conTopOuterHeight = jqv('.conTop').outerHeight();
  jqv('.conBottom').css('padding-top', conTopOuterHeight);
}
