<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
	<title>TV Principle</title>
	<link href="css/basic.css" rel="stylesheet"/>
	<link href="css/style.css" rel="stylesheet"/>
	<script>
		var JSONData = [];
	</script>
	<script src="lib/jquery_sub.js"></script>
	<script src="data/menu.js"></script>
	<script src="javascript/placeholders.min.js"></script>
	<script src="javascript/service/directives.js"></script>
	<script src="javascript/script.js"></script>
	<script src="javascript/search_action.js"></script>
	<%-- <script src="javascript/view/leftMenu.js"></script> --%>
	<script src="javascript/service/services.js"></script>
	<script src="data/menu.js"></script>
	<!--[if lt IE 9]>
<script src="javascript/html5shiv.js"></script>
<![endif]-->
</head>

<body id="mainBody">
	<%
	String pagefile = request.getParameter("page");
	if (pagefile == null) {
	  pagefile = "input/remote";
	}
	%>
	<div class="contianer">
		<div class="headerPanel">
			<h1>
				<a href="index.jsp">
					<img src="img/logo.png" alt=""></a>
				</h1>
				<div class="topSearch">
					<form onsubmit="return showSearchResult()">
						<input type="text" id="search_text_id" class="search_text" placeholder="Search"/>
						<div class="searchBut" onclick="showSearchResult()"></div>
					</form>
				</div>
				<div class="menuControlBox">
					<a href="" class="btn_ham"></a>
				</div>
			</div>

			<div class="leftPanel">
				<ul>
					<li class="depth1" style="cursor: pointer;">
						<div id="dep3" class="focus">INPUT</div>
						<ul style="display: block; overflow: hidden;">
							<li class="depth2" style="cursor: pointer;">
								<div id="dep3_1" page="input/remote">Remote</div>
							</li>
							<li class="depth2" style="cursor: pointer;">
								<div id="dep3_2" page="input/dpadInteraction">D-pad Interaction</div>
							</li>
							<li class="depth2" style="cursor: pointer;">
								<div id="dep3_2">Voice Control</div>
								<ul>
									<li class="depth3" style="cursor: pointer;">
										<div id="dep3_2_1" page="input/voice-control/voiceNavigation">Voice Navigation</div>
									</li>
									<li class="depth3" style="cursor: pointer;">
										<div id="dep3_2_2" page="input/voice-control/voiceTouch">Voice Touch</div>
									</li>
									<li class="depth3" style="cursor: pointer;">
										<div id="dep3_2_3" page="input/voice-control/voiceCommand">Voice Contextual Command</div>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</div>

			<div class="rightPanel">
				<jsp:include page='<%="component/" + pagefile + ".jsp"%>' />
			</div>
		</div>

	</body>
	<%-- <script language="javascript" type="text/javascript">
		function resizeIframe(obj) {
			obj = document.getElementById("contentFrame");
			var subContainer = obj.contentWindow.document.querySelector(".showCon");
			var t = subContainer.getClientRects();
			obj.style.height = parseInt(t[0].height, 10) + 50 + 'px';
			var t = document.body.clientHeight;
			var htmlTop = $(".headerPanel").outerHeight();
			$(".rightPanel").css("padding-top", htmlTop);
			obj.style.height = (t - htmlTop) + 'px';

		}
		window.onresize = resizeIframe;

		// window.onload = function () {
		// 	Menu.render();
		// 	$('.leftPanel > ul > li').addClass('depth1');
		// 	$('.leftPanel > ul > li > ul > li').addClass('depth2');
		// 	$('.leftPanel > ul > li > ul > li > ul > li').addClass('depth3');
		// 	$('.leftPanel > ul > li > ul').hide();
		// 	//초기 메뉴설정
		// 	$('.leftPanel > ul > li:first-child > div').addClass('focus');
		// 	$('.leftPanel > ul > li:first-child > ul').show();
		// 	$('.leftPanel > ul > li:first-child > ul > li:first-child > div').addClass('current');
		//
		// 	$('#dep9_0').parent().after('<li class="lnbLineBreak"><div><span>COMMON PATTERNS</span></div></li>');
		// 	$('#dep9_3').parent().after('<li class="lnbLineBreak"><div><span>APP PATTERNS</span></div></li>');
		// }
	</script> --%>
</html>
