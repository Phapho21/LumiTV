function searchResultDisplay (obj) {
	$(obj.frameElement).each((function (currentObj) {
		return function () {
			var elemData = $(this).data("tag");

			if (typeof $(this).data("mode") != 'undefined' && $(this).data("mode")=='searchResult' ) {
				var offsetPos = $(currentObj).find('[tag="'+elemData.title+'"]').offset();
				var heightVal = $(currentObj).find('[tag="'+elemData.title+'"]').children().eq(2).height();
				$(this).height(heightVal);
				$(currentObj).find(".heading").hide();
				if($(currentObj).find(".showCon").length) {
					$(currentObj).find(".showCon").css({"margin-top":"0px"})[0].scrollTop = offsetPos.top - 130;
				}
				$(this).data('mode', 'searchFocus');
			} else if(window.parent.Menu.hasOwnProperty('searchMode') && window.parent.Menu.searchMode=="searchFocus") {
				window.parent.Menu.searchMode = null;
				elemData = window.parent.Menu.searchData;
				var offsetPos = $(currentObj).find('[tag="'+elemData.title+'"]').offset();
				if($(currentObj).find(".showCon").length) {
					$(currentObj).find(".showCon")[0].scrollTop = offsetPos.top - 130;
				}
				$(this).data('mode', '');
			}
		};
	})(obj.document));
}
