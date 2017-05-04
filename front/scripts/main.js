
var markdownString = '```c++\n #include "sdtio.h"```';
require.config({
	paths:{
		"marked":"https://cdn.bootcss.com/marked/0.3.6/marked.min",
		"highlight":"https://cdn.bootcss.com/highlight.js/9.11.0/highlight.min",
	}
});
require(['marked', 'highlight'], function (marked,highlight){
	marked.setOptions({
  		highlight: function (code) {
    		return highlight.highlightAuto(code).value;
  		}
	});
	
	console.log(marked(markdownString));
	var app6 = new Vue({
  		el: '#app-6',
  		data: {
    	message: "hello"
  	},
  	  updated : function () {
  	console.log(markdownString)
    console.log('row:'+(app6.message));
    var str=app6.message;
  	console.log('marked:'+marked(str));
  	  document.getElementById('content').innerHTML =
      marked(str);
  }
})  
	
	//console.log(marked((app6.message)));

})

