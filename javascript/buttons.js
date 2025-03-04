function updateScroll (top) {
	if(document.body) {
		//document.body.scrollTop = top;
		//document.documentElement.scrollTop = top;
        document.querySelector(".subContainer").scrollTop = top;
        //document.getElementById("buttonsFrame").contentWindow.document.body.scrollTop = top;
	} else {
		document.documentElement.scrollTop = top;
	}
}