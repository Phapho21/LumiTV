/**
 *
 * File Name           :   directives.js
 * Brief Description   :   javascript file used for Multiroom layout.
 * Author              :   Pardeep Kumar(pardeep.g@samsung.com)
 * Project             :   SMART_TV_2015_&_2016
 * Lab                 :   UX 2 | Service Development | SRI-Delhi
 * Date                :   Sep 3, 2015
 * Dependency          :   None
 * Copyright 2014 by Samsung Electronics, Inc.,
 *
 * This software is the confidential and proprietary information
 * of Samsung Electronics, Inc. ("Confidential Information").  You
 * shall not disclose such Confidential Information and shall use
 * it only in accordance with the terms of the license agreement
 * you entered into with Samsung.
 *
 *
 */

function f_Configure (mode) {
	var data = {
		menu : getData("menu"/*, function () {
			
			var loadContent = function (obj) {
				$(obj.list).each(function () {
					if(this.hasOwnProperty("id") && this.id!="") {
						this.content = getData(this.id);
					}
					if(this.hasOwnProperty("list") && this.list.length) {
						loadContent(this);
					}
				})
			}
			loadContent(this);
		}*/)
	}
	return data[mode];
}
	
function getData(file, callback) {
	var data = JSONData[file];
	
	if (typeof callback == 'function') {
		callback.call(data);
	}
	
	/*$http.get("data/" + file + ".json")
	.success(function (response) {
		angular.extend(data, response);
		
		if (typeof callback == 'function') {
			callback.call(data);
		}
	})
	.error(function (response) {
		console.log(response);
	});*/
	return data;
}
