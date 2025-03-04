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

var Menu = (function () {

	var Component = {
		activeMenu : 0,
		activeSubMenu : -1,
		articleIndex : -1,
		menu : f_Configure('menu'),
		searchText : ''
	};

	Component.render = function () {
		var listElem = $("<ul>");

		this.renderList(this.menu, listElem, []);
		$(".leftPanel").append(listElem);
	};
	
	Component.renderList = function (data, parentElem, linkData) {
		for (var i=0, l=data.list.length; i<l; i++) {
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
			
			if((data.list[i].hasOwnProperty('id') && data.list[i].id!="") || (data.list[i].hasOwnProperty('list') && data.list[i].list.length)) {
				listSubElem.css({'cursor': 'pointer'});
				
				listSubElem.children("div").click((function (obj, baseElem, linkd) {
					return function () {
						var isActiveLink = false;
						// show page
						if(obj.hasOwnProperty('id') && obj.id!="") {
							Menu.articleIndex = -1;
							Menu.activeMenu = (linkd.length>0)?linkd[0]:0;
							Menu.activeSubMenu = (linkd.length>1)?linkd[1]:-1;
							//document.querySelector("iframe#contentFrame").src = 'component/page/page.html';
							document.querySelector("iframe#contentFrame").src = 'component/' + obj.id + '.html';
							isActiveLink = true;
						}
						
						

						// open-close menu
						if(obj.hasOwnProperty('list') && obj.list.length) {
							isActiveLink = true;
						}

						// open-close menu
						// if(obj.hasOwnProperty('list') && obj.list.length) {
						// 	if ($(baseElem).children("ul").hasClass('closeMenu')) {
						// 		$(baseElem).children("ul").addClass('closeMenu');
						// 		$(baseElem).children("ul").removeClass('closeMenu');
						// 		isActiveLink = true;
						// 		console.log(baseElem);
						// 	} else {
						// 		$(baseElem).children("ul").addClass('closeMenu');
						// 		$(baseElem).children("ul").addClass('closeMenu');
						// 		isActiveLink = true;
						// 	}
						// }

						if(isActiveLink) {
							if($(this).parent().hasClass("depth1")){
								if(obj.hasOwnProperty('id') && obj.id!="") {
									if($(this).next().length > 0){
										if($(this).next().css("display") == "none"){
											$(".leftPanel > ul").find("ul").hide();
											$(".leftPanel div").removeClass('focus current');
											$(this).next().slideDown();
											$(this).addClass("current");
										}
									} else {
										$(".leftPanel > ul").find("ul").hide();
										$(".leftPanel div").removeClass('focus current');
										$(this).addClass("current");
									}
								} else {
									if($(this).next().css("display") == "none"){
										$(".leftPanel > ul").find("ul").hide();
										$(".leftPanel div").removeClass('focus current');
										$(this).next().slideDown();
										$(this).addClass("focus");
									} else {
										$(".leftPanel > ul").find("ul").hide();
										$(".leftPanel div").removeClass('focus current');
										$(this).next().hide();
										$(this).removeClass("focus");
									}
									
								}								
							} else if ($(this).parent().hasClass("depth2")){
								if(obj.hasOwnProperty('id') && obj.id!="") {
									if($(this).next().length > 0){
										if($(this).next().css("display") == "none"){
											$(".leftPanel > ul > li > ul").find("ul").hide();
											$(".leftPanel > ul > li > ul > li > div").removeClass('focus current');
											$(this).next().children().find("div").removeClass('focus current');				
											$(this).parent().parent().parent().children("div").removeClass('current').addClass("focus");									
											$(this).next().slideDown();
											$(this).addClass("current");
										}
									} else {
										$(".leftPanel > ul > li > ul").find("ul").hide();
										$(".leftPanel > ul > li > ul > li > div").removeClass('focus current');
										$(this).next().children().find("div").removeClass('focus current');				
										$(this).parent().parent().parent().children("div").removeClass('current').addClass("focus");									
										$(this).next().slideDown();
										$(this).addClass("current");
									}
									
									
									
								} else {
									if($(this).next().css("display") == "none"){
										$(".leftPanel > ul > li > ul").find("ul").hide();
										$(".leftPanel > ul > li > ul > li > div").removeClass('focus current');
										$(this).next().children().find("div").removeClass('focus current');			
										$(this).next().slideDown();
										$(this).addClass("focus");		
									} else {
										$(".leftPanel > ul > li > ul").find("ul").hide();
										$(".leftPanel > ul > li > ul > li > div").removeClass('focus current');
										$(this).next().children().find("div").removeClass('focus current');			
										$(this).next().hide();
										$(this).removeClass("focus");
									}
															
								}		
							} else if ($(this).parent().hasClass("depth3")){								
									$(".leftPanel > ul > li > ul > li > ul").find("ul").hide();
									$(".leftPanel > ul > li > ul > li > ul > li > div").removeClass('focus current');
									$(this).next().children().find("div").removeClass('focus current');								
									$(this).parent().parent().parent().children("div").removeClass('current').addClass("focus");						
									$(this).next().slideDown();
									$(this).addClass("current");								
							}
							/*
							$(this).parents("ul").find('li').children('div').removeClass('focussed');
							$(this).parents("li").children('div').addClass('focussed');*/
						}
					};
				})(data.list[i], listSubElem, linkDataTemp));


			} else {
				listSubElem.css({'cursor': 'default'});
			}

				
			if(data.list[i].hasOwnProperty("list") && data.list[i].list.length) {
				var listElem = $("<ul>").addClass('closeMenu').appendTo(listSubElem);
				this.renderList(data.list[i], listElem, linkDataTemp);
			}
			
		}
		
	};
	return Component;
})();