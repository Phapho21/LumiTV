JSONData["button"] = {
    "page_title" : "Button"
    , "page_links" : [
		{"title" : "Definition", "article" : 0}
		, {"title" : "Usage", "article" : 1}
		, {"title" : "C_BUTTONBASIC", "article" : 2}
		, {"title" : "Motion", "article" : 4}
	]
    , "section" : [
        {
            "article" : "para"
            , "title" : "Definition"
            , "text" : [
				"Use a button when users need to choose between two or more options to proceed with a task. Buttons are UI elements that users interact with to select options, perform actions, or switch to related functions. Place buttons in the same area of the screen throughout the user interface so that users can easily access them across all applications. Thumbnails that appear in the accelerators or lists are contextual and not fixed items. Although they perform similar tasks, they are not considered buttons."
				, "<br>"
			]
		}
		, {
            "article" : "para"
			, "title" : "Usage"
			, "text" : []
			, "sub": [
				{
					"type" : "2-column"
					, "title" : ""
					, "text" : [
						"1. Basic Button"
						, "Use this buttons as the first priority unless there are any other critical issues. Display the button icon and label that describe the button action. To allow users to easily distinguish between command buttons (to perform specific actions or open related pages) and sublist buttons (to open sublists), provide a visual cue on a sublist button that is designed to open a sublist of menu items when selected."
						, "<br><br><br>"
					]
					, "column-2" : {
						"elements": [
							{
								"type": "button"
								, "img_class": "img_btn"
								, "section": "sections left"
								, "left_icon": "circle"
								, "title": "Text"
							}
							, {
								"type": "button"
								, "img_class": "img_btn"
								, "section": "sections right"
								, "left_icon": "circle"
								, "title": "Text"
								, "right_icon": "down_arrow"
								, "right_icon_style": "color: #fff;position: relative; left: 140px; top: 22px;"
							}
						]
					}
				}
				, {
					"type" : "2-column"
					, "title" : ""
					, "text" : [
						"2. Expandable button"
						, "Use this button when you have difficulties displaying multiple basic button in a limited area and the area, such as a list, can be expandable or collapsible depending on the context.<br>This button appears as an icon in the normal state, but the button frame expands when it is focused on to reveal the text label."
						, "<br><br><br>"
					]
					, "column-2" : {
						"elements": [
							{
								"type": "button"
								, "img_class": "img_btn"
								, "section": "sections-expand"
								, "left_icon": "circle"
								, "title": "Text"
							}
						]
					}
				}
				, {
					"type" : "2-column"
					, "title" : ""
					, "text" : [
						"Icon Button"
						, "Use this button when you have difficulties displaying multiple basic buttons in a limited area and the area, such as a title area, cannot be expandable due to the fixed layout. This button appears as an icon in the normal state and shows the button label in a tooltip when it is focused on.<br>To allow users to easily distinguish between command buttons (to perform specific action or open related pages) and sublist buttons (to open sublists), provide a visual cue on a sublist button that is designed to open a sublist of menuitems when selected."
						, "<br><br><br>"
					]
					, "column-2" : {
						"elements": [
							{
								"type": "button-play"
								, "img_class": "img_btn"
								, "section": "sections-icon left"
								, "title": ""
								, "right_icon": "down_arrow"
								, "right_icon_style": "color: #fff;position: relative; left: 140px; top: 22px;"
							}
							, {
								"type": "button-setting"
								, "img_class": "img_btn"
								, "section": "sections-icon right"
								, "title": ""
							}
						]
					}
				}
			]
		}
		, {
            "article" : "para"
			, "title" : "C_BUTTONBASIC"
			, "tag" : "C_BUTTONBASIC"
			, "text" : []
			, "sub" : [
				{
					"type" : "2-column"
					, "title" : ""
					, "text" : [
						"1. Basic Button"
						, "A basic button consist of the following element:"
						, "- Icon {mandatory} "
						, "- Label {mandatory} "
						, "- Indicator {mandatory when containing a sublist}"
						, "<br><img src='../../resources/images/c_button.jpg'>"
						, "<br><br><br>"
					]
					, "column-2" : {
						"elements": [
							{
								"type": "button"
								, "img_class": "img_btn"
								, "section": "sections-button"
								, "left_icon": "circle"
								, "title": "Text"
							}
							, {
								"type": "button"
								, "section": "sections-button"
								, "img_class": "img_btn mid"
								, "left_icon": "circle"
								, "title": "Text"
							}
							, {
								"type": "button"
								, "section": "sections-button"
								, "img_class": "img_btn"
								, "left_icon": "circle"
								, "title": "Text"
								, "right_icon": "down_arrow"
								, "right_icon_style": "color: #fff;position: relative; left: 135px; top: 28px;"
							}
						]
					}
				}
			]
		}
		, {
            "article" : "para2"
            , "title" : ""
            , "skipSearch" : true
            , "text" : [
				'<div class="GUIGuideline">\
					<div class="guide_table"></div>\
					<div class="img_sample"><div class="img_container">\
						<div id="normal_btn">\
							<div class="img_btn normal"><div class="btn">Basic Button</div>\
								<div class="spotlight"><img src="../../resources/images/Highlight_spot light.png" class="gloss"></div>\
							</div>\
						</div>\
						<div id="diable_btn">\
							<div class="img_btn disable">\
								<div class="btn">Basic Button</div>\
								<div class="spotlight"><img src="../../resources/images/Highlight_spot light.png" class="gloss"></div>\
							</div>\
						</div>\
					</div></div>\
				</div>'
				, "<br><br><br>"
			]
		}
		, {
            "article" : "para"
			, "title" : "MOTION"
			, "text" : [
				'<video controls=""><source src="../../resources/video/motion_sample.mp4" type="video/mp4"></video><br clear="all"><br><br><br><br><br><br><br><br>'
			]
		}
	]
}
