function searchResultDisplay (obj,locationText,url) {

	$(obj.frameElement).each((function (currentObj) {
		return function () {
			// console.log(currentObj);
			// $(currentObj).find(".conTop").text("test");
			var searchText = $(currentObj).find("[searchWord]").text();
			var searchImg = $(currentObj).find("[searchWord]").find('.searchImg').attr("src");
			var searchTagText = $(currentObj).find(".subConInTit").text();

			var highlightText = Search.highlightText(searchText);
			//console.log(searchText.length);

			var searchTitleLength = locationText.split(" > ").length-1;
			var searchTitle = locationText.split(" > ")[searchTitleLength];

			var searchTagTextTrim = searchTagText.replace(/^\s*|\s*$/g,'');
// console.log(searchTagTextTrim);
			var html ="";
			html+="<div class='searchWrap'>";
			if (searchTagTextTrim) {
				html+="<div class='tag'><a href=\"javascript:parent.parentLocationChg(\'"+url+"\')\" class='searchResultLink'>"+searchTitle+" ("+searchTagTextTrim+")</a></div>";
			} else {
				html+="<div class='tag'><a href=\"javascript:parent.parentLocationChg(\'"+url+"\')\" class='searchResultLink'>"+searchTitle+"</a></div>";
			}
			html+="<div class='searchWrapIn'>";
			html+="<div class='location'><a href=\"javascript:parent.parentLocationChg(\'"+url+"\')\" class='searchResultLink'>"+locationText+"</a></div>";
			html+="<div class='txt'>"+highlightText+"</div>";
			// console.log(searchImg);
			if (searchImg) {
				html+="<div class='img'><img src='"+searchImg+"' alt=''></div>";
			}

			html+="</div>";
			html+="</div>";
			$(currentObj).find("body").children().remove();
			$(currentObj).find("body").append(html);


		};
	})(obj.document));
}

// 메뉴초기화
function menuInit () {
	$('.depth1 > ul').hide();
	$('.leftPanel div').removeClass('focus current');
}
