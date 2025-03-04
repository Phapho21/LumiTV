var http = require("http");

http.createServer(function (request, response) {

	// Send the HTTP header 
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
   
   
	//console.log(fs)
   
	var data = getFileData('../data/menu.js', function (content) {
		var menuJson = null;
		if (content) {
			var menuJson = JSON.parse(content.toString().substr(18));
			console.log(menuJson);
			
			var loadContent = function (obj) {
				for(var i=0, l=obj.list.length; i<l; i++) {
					if(obj.list[i].hasOwnProperty("id") && obj.list[i].id!="") {
						obj.list[i].content = parseTAGfromHTML(getFileData("../component/" + obj.list[i].id + ".html"));
					}
					if(obj.list[i].hasOwnProperty("list") && obj.list[i].list.length) {
						loadContent(obj.list[i]);
					}
				}
			}
			loadContent(menuJson);
			
			saveFileData("../data/search/searchData.js", "var searchData = " + JSON.stringify(menuJson));
		}
		return menuJson;
	});
	
	// Send the response body as "Hello World"
	response.end('Hello World\n');
}).listen(8081);

function parseTAGfromHTML (data) {
	var retData = [];
	
	var pattern1 = new RegExp("tag\\s*?=\\s*?['\"]?\\s*(c_[^ ]*?)['\"\\s>]", 'ig');
	while(res = pattern1.exec(data)) {
		retData.push({"tag": res[1], "index": res.index});
	}
	return retData;
}

function saveFileData (path, data, callback) {
	const fs = require('fs');
	if(path && path!='') {
		fs.writeFileSync(path, data);
		
		if (typeof callback == 'function') {
			return callback(data);
		}
	}
}

function getFileData (path, callback) {
	const fs = require('fs');
	if(path && path!='') {
		data = fs.readFileSync(path);
		
		if (typeof callback == 'function') {
			return callback(data);
		}
		
		return data.toString();
	}
}
