/**
 *
 * File Name           :   leftMenu.js
 * Brief Description   :   javascript file used for Multiroom layout.
 * Author              :   Pardeep Kumar(pardeep.g@samsung.com)
 * Project             :   HTML Guide
 * Lab                 :   UX 2 | Service Development | SRI-Delhi
 * Date                :   April, 2016
 * Dependency          :   None
 * Copyright 2016 by Samsung Electronics, Inc.,
 *
 * This software is the confidential and proprietary information
 * of Samsung Electronics, Inc. ("Confidential Information").  You
 * shall not disclose such Confidential Information and shall use
 * it only in accordance with the terms of the license agreement
 * you entered into with Samsung.
 *
 *
 */

var Menu = (function() {

  var Component = {
    activeMenu: 0,
    activeSubMenu: -1,
    articleIndex: -1,
    menu: f_Configure('menu'),
    searchText: ''
  };

  Component.render = function() {
    var listElem = $("<ul>");
    // console.log(this);
    this.renderList(this.menu, listElem, []);
    $(".leftPanel").append(listElem);
  };

  Component.renderList = function(data, parentElem, linkData) {
    for (var i = 0, l = data.list.length; i < l; i++) {
      var linkDataTemp = linkData.slice();
      linkDataTemp.push(i);

      var listSubElem = $("<li>").html("<div " + "id=" + '"' + data.list[i].indexNum + '"' + ">" + data.list[i].title + "</div>").appendTo(parentElem);
      /*var classFocussed = "";
      if(this.activeSubMenu != -1 && linkDataTemp.length>1 && this.activeMenu==linkDataTemp[0] && this.activeSubMenu==linkDataTemp[1]) {
        classFocussed = "focussed";
      } else if(this.activeSubMenu == -1 && linkDataTemp.length>0 && this.activeMenu==linkDataTemp[0]) {
        classFocussed = "focussed";
      }
      if(classFocussed != '') {
        listSubElem.children("div").addClass('focus'); //로드되면서 클래스 들어감?
      }*/

      if ((data.list[i].hasOwnProperty('id') && data.list[i].id != "") || (data.list[i].hasOwnProperty('list') && data.list[i].list.length)) {
        listSubElem.css({ 'cursor': 'pointer' });
        listSubElem.children("div").click((function(obj, baseElem, linkd) {
          return function() {
            location.hash = obj.id;
            var isActiveLink = false;
            // show page
            if (obj.hasOwnProperty('id') && obj.id != "") {
              Menu.articleIndex = -1;
              Menu.activeMenu = (linkd.length > 0) ? linkd[0] : 0;
              Menu.activeSubMenu = (linkd.length > 1) ? linkd[1] : -1;
              //document.querySelector("iframe#contentFrame").src = 'component/page/page.html';
              document.querySelector("iframe#contentFrame").src = 'component/' + obj.id + '.html';
              isActiveLink = true;
            }
            // open-close menu
            if (obj.hasOwnProperty('list') && obj.list.length) {
              isActiveLink = true;
            }
            // open-close menu
            // if(obj.hasOwnProperty('list') && obj.list.length) {
            //  if ($(baseElem).children("ul").hasClass('closeMenu')) {
            //    $(baseElem).children("ul").addClass('closeMenu');
            //    $(baseElem).children("ul").removeClass('closeMenu');
            //    isActiveLink = true;
            //    console.log(baseElem);
            //  } else {
            //    $(baseElem).children("ul").addClass('closeMenu');
            //    $(baseElem).children("ul").addClass('closeMenu');
            //    isActiveLink = true;
            //  }
            // }
            if (isActiveLink) {
              if ($(this).parent().hasClass("depth1")) {
                if (obj.hasOwnProperty('id') && obj.id != "") {
                  $('.depth1 > ul').hide();
                  $(".leftPanel div").removeClass('focus current');
                  $(this).addClass("current");
                } else {
                  if ($(this).next().length > 0) {
                    if ($(this).next().css("display") === "block") {
                      $(this).next().slideUp();
                      $(this).addClass("focus");
                    } else {
                      $('.depth1 > ul').hide();
                      $(".depth1 > div").removeClass('focus current');
                      $(this).next().slideDown();
                      $(this).addClass("focus");
                    }
                  } else {
                    $(".leftPanel div").removeClass('focus current');
                    $(this).addClass("focus");
                  }
                }
              } else if ($(this).parent().hasClass("depth2")) {
                if (obj.hasOwnProperty('id') && obj.id != "") {
                  $(this).parents('.depth1').find('.depth3').children('div').removeClass('current');
                  $(this).parents('.depth1').children('.depth2').find('div').removeClass('focus current');
                  $(this).parents('ul').find('div').removeClass('focus current');
                  $(this).parents('.depth1').children('div').removeClass('current').addClass("focus");
                  $(this).addClass("current");
                } else {
                  $(this).parents('.depth1').find('.depth3').children('div').removeClass('current');
                  $(this).parents('.depth1').children('.depth2').find('div').removeClass('focus current');
                  $(this).parents('ul').find('div').removeClass('focus current');
                  $(this).parents('.depth1').children('div').removeClass('current').addClass("focus");
                  $(this).addClass("focus");
                }
              } else if ($(this).parent().hasClass("depth3")) {
                $(this).parents('ul').find('div').removeClass('focus current');
                $(this).parents('.depth1').children('.depth2').find('div').removeClass('focus current');
                $(this).parents('.depth1').children('div').removeClass('current').addClass('focus');
                $(this).parents('.depth2').children('div').removeClass('current').addClass('focus');
                $(this).addClass("current");
              }
              /*
              $(this).parents("ul").find('li').children('div').removeClass('focussed');
              $(this).parents("li").children('div').addClass('focussed');*/
            }
          };
        })(data.list[i], listSubElem, linkDataTemp));


      } else {
        listSubElem.css({ 'cursor': 'default' });
      }


      if (data.list[i].hasOwnProperty("list") && data.list[i].list.length) {
        var listElem = $("<ul>").appendTo(listSubElem);
        this.renderList(data.list[i], listElem, linkDataTemp);
      }

    }

  };
  Component.loactionText = function(locationUrl) {
    var urlPath = locationUrl.split("component/");
    var navigavionText1 = "";
    var navigavionText2 = "";
    var navigavionText3 = "";
    var depthBreak = false;
    urlPath = urlPath[1].replace(".html", "");

    menuList = this.menu;
    var navigavionText = "";
    for (i = 0; i < menuList.list.length; i++) {
      if (urlPath == menuList.list[i].id) {
        navigavionText1 = menuList.list[i].title
        break;
      } else {
        navigavionText1 = menuList.list[i].title
      }
      if (menuList.list[i].hasOwnProperty('list')) {
        for (j = 0; j < menuList.list[i].list.length; j++) {
          if (urlPath == menuList.list[i].list[j].id) {
            navigavionText2 = menuList.list[i].list[j].title
            depthBreak = true;
            break;
          } else {
            navigavionText2 = menuList.list[i].list[j].title
          }
          if (menuList.list[i].list[j].hasOwnProperty('list')) {
            for (k = 0; k < menuList.list[i].list[j].list.length; k++) {
              if (urlPath == menuList.list[i].list[j].list[k].id) {
                navigavionText3 = menuList.list[i].list[j].list[k].title
                depthBreak = true;
                break;
              }
            }
          }
          if (depthBreak) {
            break;
          }
        }
      }
      if (depthBreak) {
        break;
      }
    }
    navigavionText = navigavionText1;
    if (navigavionText2 != "") {
      navigavionText += " > " + navigavionText2;
    }
    if (navigavionText3 != "") {
      navigavionText += " > " + navigavionText3;
    }
    return navigavionText;
  };

  Component.searchTagId = function(searchTag) {
    var depthBreak = false;
    menuList = this.menu;
    var searchTagId = "";
    for (i = 0; i < menuList.list.length; i++) {
      if (searchTag == menuList.list[i].indexNum) {
        searchTagId = menuList.list[i].id
        break;
      }
      if (menuList.list[i].hasOwnProperty('list')) {
        for (j = 0; j < menuList.list[i].list.length; j++) {
          if (searchTag == menuList.list[i].list[j].indexNum) {
            searchTagId = menuList.list[i].list[j].id
            depthBreak = true;
            break;
          }
          if (menuList.list[i].list[j].hasOwnProperty('list')) {
            for (k = 0; k < menuList.list[i].list[j].list.length; k++) {
              if (searchTag == menuList.list[i].list[j].list[k].indexNum) {
                searchTagId = menuList.list[i].list[j].list[k].id
                depthBreak = true;
                break;
              }
            }
          }
          if (depthBreak) {
            break;
          }
        }
      }
      if (depthBreak) {
        break;
      }
    }
    return searchTagId;
  };
  return Component;
})();
