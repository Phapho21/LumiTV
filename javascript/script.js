_onload = function() {
  document.querySelector(".topIcon").addEventListener("click", function() {
    //var t = document.querySelector("iframe");
    //console.log(t.contentWindow.document);
    console.log(document.body)
    if (document.body) {
      document.body.scrollTop = 0;
    } else {
      document.documentElement.scrollTop = 0;
    }
  });

  /*var onScrollHandler = function () {
      if(document.body) {
          var pageTop = document.body.scrollTop;
      } else {
          var pageTop = document.documentElement.scrollTop;
      }

      document.querySelector("header.headerPanel").style.top = pageTop + 'px';
      document.querySelector("nav.leftPanel").style.top = pageTop + 84 + 'px';
  }
  window.onscroll = onScrollHandler;

  onScrollHandler();*/


}

var activePage = "introContent";

function toggle(id, id2) {
  removeFocus(id);
  if (document.querySelector("#" + id).style.display == "block") {
    document.querySelector("#" + id2).classList.remove('focus');
    window.setTimeout(function() {
      document.querySelector("#" + id).style.display = 'none';
    }.bind(this), 1000);

  } else {
    document.querySelector("#" + id).style.display = 'block';
    document.querySelector("#" + id2).classList.add('focus');
  }
}

function removeFocus(id) {
  var idArr = ['introContent', 'component', 'buttonContent'];
  for (var i = 0; i < idArr.length; i++) {
    if (activePage == "buttonContent" && idArr[i] == 'component') {
      console.log(idArr[i]);
    } else {
      if (idArr[i] == 'buttonContent') {
        document.querySelector("#" + idArr[i] + "Link").classList.remove('focus');
        document.querySelector("#componentLink").classList.remove('focus');
        if (document.querySelector("#submenu").style.display == "block") {
          window.setTimeout(function() {
            document.querySelector("#submenu").style.display = 'none';
          }.bind(this), 1000);
        }
      } else {
        document.querySelector("#" + idArr[i] + "Link").classList.remove('focus');
      }

    }
  }
}

// function openPage(id) {
//   activePage = id;
//   if (id != "buttonContent")
//     removeFocus(id);
//   var Iframe = document.querySelector("iframe");
//   Iframe.src = "component/" + id + ".html";
//   document.querySelector("#" + id + "Link").classList.add('focus');
//   if (id == 'buttonContent') {
//     document.querySelector("#componentLink").classList.add('focus');
//   }
// }




function showSearchResult() {
  var searchText = document.querySelector("input#search_text_id").value;
  searchText = searchText.replace(/^[ ]*/, '').replace(/[ ]*$/, '');

  if (searchText != "") {
    Menu.searchText = searchText;
    document.querySelector("iframe#contentFrame").src = 'component/search/search.html';
  }
  return false;
}

// 메뉴 열고 닫기
$(document).ready(function() {
  $(".menuControlBox .btn_ham").click(function(e) {
    if ($(this).hasClass("off")) {
      e.preventDefault();
      $(this).parent().removeClass("off");
      $(this).removeClass("off");
      $(".leftPanel").removeClass("off");
      $(".rightPanel").removeClass("off");
    } else {
      e.preventDefault();
      $(this).parent().addClass("off");
      $(this).addClass("off");
      $(".leftPanel").addClass("off");
      $(".rightPanel").addClass("off");
    }
  });
  $(window).resize(function() {
    if ($("html").width() < 1000) {
      $(".menuControlBox").addClass("off");
      $(".menuControlBox .btn_ham").addClass("off");
      $(".leftPanel").addClass("off");
      $(".rightPanel").addClass("off");
    } else {
      $(".menuControlBox").removeClass("off");
      $(".menuControlBox .btn_ham").removeClass("off");
      $(".leftPanel").removeClass("off");
      $(".rightPanel").removeClass("off");
    }
  });

});
/*$(document).ready(function() {
  $(".leftPanel .btn_lnb").click(function(e){
    var btnLnbWidth = $(this).width();
    if ($(this).hasClass("active")){
      e.preventDefault();
      $(this).removeClass("active").css('right', '0');
      $(".leftPanel").css("left","0");
      $(".rightPanel").css({"padding-left":"240px"});
    } else {
      e.preventDefault();
      $(this).addClass("active").css('right', '-' + btnLnbWidth + 'px');
      $(".rightPanel").css({"padding-left":"10px"});
      $(".leftPanel").css("left","-230px");
    }
  });

});*/

//페이지 연관태그 링크클릭 이벤트
function linkTagCall(linkTagName) {
  $('#' + linkTagName).trigger('click');
  $(".leftPanel .depth1 div").removeClass("focus current");
  $(".leftPanel .depth1 > ul").hide();
  var linkTagDepth = $('#' + linkTagName);
  if (linkTagDepth.parents("depth2")) {
    linkTagDepth.addClass("current");
    linkTagDepth.parents(".depth2").children("div").addClass("focus");
    linkTagDepth.parents(".depth1").children("ul").show();
    linkTagDepth.parents(".depth1").children("div").addClass("focus");
  } else {
    linkTagDepth.addClass("current");
    linkTagDepth.parents(".depth1").children("ul").show();
    linkTagDepth.parents(".depth1").children("div").addClass("focus");
  }
}

//뒤로가기 시 메뉴 활성화
function menuReCall(menuLink) {
  $(".leftPanel .depth1 div").removeClass("focus current");
  $(".leftPanel .depth1 > ul").hide();
  var menuLinkDepth = $('#' + menuLink);
  if (menuLinkDepth.parents("depth2")) {
    menuLinkDepth.addClass("current");
    menuLinkDepth.parents(".depth2").children("div").addClass("focus");
    menuLinkDepth.parents(".depth1").children("ul").show();
    menuLinkDepth.parents(".depth1").children("div").addClass("focus");
  } else {
    menuLinkDepth.children("div").addClass("current");
    menuLinkDepth.parents(".depth1").children("ul").show();
    menuLinkDepth.parents(".depth1").children("div").addClass("focus");
  }
}
