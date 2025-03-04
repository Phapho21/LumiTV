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
function test(i) {
	//console.log($(obj.frameElement).contentWindow.document.body.scrollHeight)
	//console.log($(obj).contentWindow.document.body.scrollHeight)
	var iframeHeight = (i).contentWindow.document.body.scrollHeight;

	(i).height = iframeHeight;
	document.querySelector('.loadingbox').classList.add('off');

}
var Search = (function() {
	var Component = {
		searchText: window.parent.Menu.searchText,
		menu: window.parent.Menu.menu,
		searchResult: { 'tag': [], 'content': [] },
		searchTagResult: { 'tag': [], 'content': [] }
	};


	Component.render = function() {

		//console.log(searchData);
		//return;

		var pageContent = $(document.createDocumentFragment());

		if (this.searchText.length > 25) {
			var searchTextToShow = this.searchText.substr(0, 25) + "...";
		} else {
			var searchTextToShow = this.searchText;
		}


		$(".showCon .conTop h2").html("Results for <span class='col_dd529d'>'" + searchTextToShow + "'</span>");

		//console.log(pageContent);
		this.searchInData(searchData, []);

		//console.log(this.searchResult)

		this.renderSearchDataResult(pageContent);

		$(".conBottomInner").append(pageContent);
	}

	Component.highlightText = function(data) {
		var htmlRegExp = new RegExp('(<[^>]*?>)', 'ig');
		var result = data.match(htmlRegExp);
		var searchText = data;
		if (result && result.length > 1) {
			for (var i = 0, l = result.length; i < l; i++) {
				searchText = searchText.replace(new RegExp(result[i], 'i'), '#$#' + i + '#$#');
			}
		}
		var searchRegExp = new RegExp('(' + this.searchText + ')', 'ig');
		searchText = searchText.replace(searchRegExp, "<strong>$1</strong>");
		if (result && result.length > 1) {
			for (var i = 0, l = result.length; i < l; i++) {
				searchText = searchText.replace(new RegExp('#\\$#' + i + '#\\$#', 'i'), result[i]);
			}
		}
		return searchText;
	}

	Component.renderSearchDataResult = function(baseElement) {
		var searchHTML = [];
		if (this.searchResult.tag.length) {
			// console.log(this.searchResult.tag);
			for (var i = 0, l = this.searchResult.tag.length; i < l; i++) {
				var resultRow = this.searchResult.tag[i];
				var container = $("<div>").addClass("search_container searchResultBox");
				//$(container).append('<div class="searchAbBox"></div>');
				//var testcontainer = $(".searchAbBox");
				var title = resultRow.content.title;

				//var tagData = $("<div>").addClass("tag_title").html("TITLE: " + title).appendTo(container);
				//var tagData = $("<div>").addClass("tag_text").html("TAG: " + this.highlightText(title)).appendTo(container);

				var id = (resultRow.hasOwnProperty("id") && resultRow.id != "") ? resultRow.id : null;
				if (id) {
					//console.log("아이디"+id);
					var iframeElement = $("<iframe>").attr({
						'src': '../' + id + '.html',
						'frameborder': '0',
						'scrolling': 'no',
						'style': 'overflow:hidden; width: 100%;',
						'onload': 'test(this)'
					}).data('tag', {
						'title': title,
						'index': ((resultRow.content.hasOwnProperty("index")) ? resultRow.content.index : -1)
					}).data('mode', 'searchResult').appendTo(container);
				}
				searchHTML.push(container);
			}
		}else{
			document.querySelector('.loadingbox').classList.add('off');
			searchHTML.push(
				'<div class="searchEmpty">No results found.</div>'
				);
		}
		if (this.searchTagResult.tag.length) {
			for (var i = 0, l = this.searchTagResult.tag.length; i < l; i++) {
				var resultRow = this.searchTagResult.tag[i];
				var container = $("<div>").addClass("search_container searchTagBox");
				//$(container).append('<div class="searchAbBox"></div>');
				//var testcontainer = $(".searchAbBox");
				var title = resultRow.content.title;

				//var tagData = $("<div>").addClass("tag_title").html("TAG: " + title).appendTo(container);
				//var tagData = $("<div>").addClass("tag_text").html("TAG: " + this.highlightText(title)).appendTo(container);
				//console.log(container);

				var id = (resultRow.hasOwnProperty("tagId") && resultRow.tagId != "") ? resultRow.tagId : null;
				if (id) {
					//console.log("아이디"+id);
					var iframeElement = $("<iframe>").attr({
						'src': '../' + id + '.html',
						'frameborder': '0',
						'scrolling': 'no',
						'style': 'overflow:hidden; width: 100%;',
						'onload': 'test(this)'
					}).data('tag', {
						'title': title,
						'index': ((resultRow.content.hasOwnProperty("index")) ? resultRow.content.index : -1)
					}).data('mode', 'searchResult').appendTo(container);
				}

				// 태그검색 중복제거
				if (searchHTML.length) {
					var checkDup = false;
					for (var j = 0, m = searchHTML.length; j < m; j++) {
						if (container.find("iframe").attr("src") == searchHTML[j].find("iframe").attr("src")) {
							checkDup = true;
							break;
						}

					}
				}
				if (!checkDup) {
					searchHTML.push(container);
				}

				//console.log(container);
			}
		}

		if (searchHTML.length) {
			for (var i = 0, l = searchHTML.length; i < l; i++) {
				$(baseElement).append(searchHTML[i]);
			}
			//console.log($(baseElement));
			$(baseElement).find('.searchTagBox').eq(0).before('<div class="searchLine">Related Topics</div>');
		}
	}

	Component.searchInData = function(data, linkData) {
		if (data.list.length) {
			for (var i = 0, l = data.list.length; i < l; i++) {
				var linkDataTemp = linkData.slice();
				linkDataTemp.push(i);

				var listData = data.list[i];
				this.searchInDataContent(listData, linkDataTemp);

				if (listData.hasOwnProperty('list') && listData.list.length) {
					this.searchInData(listData, linkDataTemp);
				}
			}
		}
	}

	Component.searchInDataContent = function(data, linkData) {
		if (data.hasOwnProperty('content') && data.content.length) {
			// search tag and text
			var searchRegExp = new RegExp('' + this.searchText + '', 'i');
			for (var i = 0, l = data.content.length; i < l; i++) {
				var sectionJSON = data.content[i];
				// search tag
				if (sectionJSON.hasOwnProperty('tag') && sectionJSON.tag != '') {
					if (sectionJSON.tag.match(searchRegExp)) {
						this.searchResult.tag.push({
							'linkData': linkData,
							'articleIndex': i,
							'id': (data.hasOwnProperty('id')) ? data['id'] : "",
							'content': {
								'title': sectionJSON['tag'],
								'index': sectionJSON['index']
							}
						});
						//태그검색 영역
						for (var k = 0; k < data.searchTag.length; k++) {
							var sectionJSON2 = data.searchTag[k];
							// search tag
							if (sectionJSON2.hasOwnProperty('tag2') && sectionJSON2.tag2 != '') {
								// console.log(sectionJSON2['tag2']);
								searchTagId = window.parent.Menu.searchTagId(sectionJSON2['tag2']);
								//alert(searchTagId);
								this.searchTagResult.tag.push({
									'tagId': searchTagId,
									'articleIndex': i,
									'content': {
										'title': sectionJSON2['tag2'],
										'index': sectionJSON2['index']
									}
								});
							}
						}
					}
				}
			}

			//태그검색 영역
			for (var i = 0, l = data.content.length; i < l; i++) {
				var sectionJSON = data.content[i];
				//console.log(sectionJSON);

			}
		}
	}

	Component.renderSearchResult = function(baseElement) {
		var searchHTML = [];
		if (this.searchResult.tag.length) {
			for (var i = 0, l = this.searchResult.tag.length; i < l; i++) {
				var container = $("<div>").addClass("search_container").click((function(obj) {
					return function() {
						window.parent.Menu.activeMenu = (typeof obj.linkData != 'undefined' && obj.linkData.length > 0) ? obj.linkData[0] : 0;
						window.parent.Menu.activeSubMenu = (typeof obj.linkData != 'undefined' && obj.linkData.length > 1) ? obj.linkData[1] : -1;
						window.parent.Menu.articleIndex = (typeof obj.articleIndex != 'undefined') ? obj.articleIndex : -1;
						window.parent.document.querySelector("iframe#contentFrame").src = 'component/page/page.html';
					}
				})(this.searchResult.tag[i]));
				var title = this.searchResult.tag[i].content.title;
				//var tagData = $("<div>").addClass("tag_title").html("TAG: " + title).appendTo(container);
				//var tagData = $("<div>").addClass("tag_text").html("TAG: " + this.highlightText(title)).appendTo(container);
				searchHTML.push(container);
			}
		}

		if (this.searchResult.content.length) {
			for (var i = 0, l = this.searchResult.content.length; i < l; i++) {
				var container = $("<div>").addClass("search_container").click((function(obj) {
					return function() {
						window.parent.Menu.activeMenu = (typeof obj.linkData != 'undefined' && obj.linkData.length > 0) ? obj.linkData[0] : 0;
						window.parent.Menu.activeSubMenu = (typeof obj.linkData != 'undefined' && obj.linkData.length > 1) ? obj.linkData[1] : -1;
						window.parent.Menu.articleIndex = (typeof obj.articleIndex != 'undefined') ? obj.articleIndex : -1;
						window.parent.document.querySelector("iframe#contentFrame").src = 'component/page/page.html';
					}
				})(this.searchResult.content[i]));
				var title = this.searchResult.content[i].content.title;
				var tagData = $("<div>").addClass("content_title").html(title).appendTo(container);
				if (this.searchResult.content[i].content.hasOwnProperty('text') && this.searchResult.content[i].content['text'].length) {
					var textNodeHTML = $("<div>").addClass("content_text").appendTo(container);
					for (var it = 0, lt = this.searchResult.content[i].content['text'].length; it < lt; it++) {
						$(textNodeHTML).append(this.highlightText(this.searchResult.content[i].content['text'][it]) + "<br>");
					}
				}
				searchHTML.push(container);
			}

		}

		if (searchHTML.length) {
			for (var i = 0, l = searchHTML.length; i < l; i++) {
				$(baseElement).append(searchHTML[i]);
			}

		}

	}

	Component.searchInList = function(data, linkData) {
		if (data.list.length) {
			for (var i = 0, l = data.list.length; i < l; i++) {
				var linkDataTemp = linkData.slice();
				linkDataTemp.push(i);

				var listData = data.list[i];
				this.searchInContent(listData, linkDataTemp);

				if (listData.hasOwnProperty('list') && listData.list.length) {
					this.searchInList(listData, linkDataTemp);
				}

			}
		}

	}

	Component.searchInContent = function(data, linkData) {
		if (data.hasOwnProperty('content')) {
			// search tag and text
			var searchRegExp = new RegExp('' + this.searchText + '', 'i');
			if (data.content.hasOwnProperty('section') && data.content.section.length) {
				for (var i = 0, l = data.content.section.length; i < l; i++) {
					var sectionJSON = data.content.section[i];

					if (sectionJSON.hasOwnProperty('skipSearch') && sectionJSON.skipSearch) {
						continue;
					}

					// search tag
					if (sectionJSON.hasOwnProperty('tag') && sectionJSON.tag != '') {
						if (sectionJSON.tag.match(searchRegExp)) {
							this.searchResult.tag.push({
								'linkData': linkData,
								'articleIndex': i,
								'content': {
									'title': sectionJSON.tag,
									'text': sectionJSON['text']
								}
							});
						}
					}

					// search text
					var searchTextFlag = false;
					if (sectionJSON.hasOwnProperty('title') && sectionJSON['title'] != "") {
						if (sectionJSON['title'].match(searchRegExp)) {

							var searchedText = [];
							if (!sectionJSON['text'].length && sectionJSON.hasOwnProperty('sub') && sectionJSON.sub.length) {
								for (var it = 0, lt = sectionJSON['sub'].length; it < lt; it++) {
									if (sectionJSON['sub'][it].hasOwnProperty('text') && sectionJSON['sub'][it]['text'].length) {
										searchedText = sectionJSON['sub'][it]['text'];
										break;
									}
								}
							} else {
								searchedText = sectionJSON['text'];
							}

							this.searchResult.content.push({
								'linkData': linkData,
								'articleIndex': i,
								'content': {
									'title': sectionJSON.title,
									'text': searchedText
								}
							});
							searchTextFlag = true;
						}
					}
					if (!searchTextFlag && sectionJSON.hasOwnProperty('text') && sectionJSON['text'].length) {
						for (var it = 0, lt = sectionJSON['text'].length; it < lt; it++) {
							if (sectionJSON['text'][it].match(searchRegExp)) {
								this.searchResult.content.push({
									'linkData': linkData,
									'articleIndex': i,
									'content': {
										'title': sectionJSON.title,
										'text': sectionJSON['text']
									}
								});
								searchTextFlag = true;
								break;
							}
						}
					}

					// search sub text
					if (!searchTextFlag && sectionJSON.hasOwnProperty('sub') && sectionJSON['sub'].length) {
						for (var it = 0, lt = sectionJSON['sub'].length; it < lt; it++) {
							if (sectionJSON['sub'][it].hasOwnProperty('title') && sectionJSON['sub'][it]['title'] != "") {
								if (sectionJSON['sub'][it]['title'].match(searchRegExp)) {
									this.searchResult.content.push({
										'linkData': linkData,
										'articleIndex': i,
										'content': {
											'title': sectionJSON.title,
											'subtitle': sectionJSON['sub'][it].title,
											'text': sectionJSON['sub'][it]['text']
										}
									});
									searchTextFlag = true;
								}
							}
							if (sectionJSON['sub'][it].hasOwnProperty('text') && sectionJSON['sub'][it]['text'].length) {
								for (var ist = 0, lst = sectionJSON['sub'][it]['text'].length; ist < lst; ist++) {
									if (sectionJSON['sub'][it]['text'][ist].match(searchRegExp)) {
										this.searchResult.content.push({
											'linkData': linkData,
											'articleIndex': i,
											'content': {
												'title': sectionJSON.title,
												'subtitle': sectionJSON['sub'][it].title,
												'text': sectionJSON['sub'][it]['text']
											}
										});
										searchTextFlag = true;
										break;
									}
								}
							}
							if (searchTextFlag) {
								break;
							}
						}
					}
				}
			}
		}
	}

	return Component;
})();
