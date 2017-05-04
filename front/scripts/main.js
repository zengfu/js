
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
  var app3=new Vue({
    el:'#app-3',
    data:{
      ok:true,

    }
  })
	var app6 = new Vue({
  		el: '#app-6',
  		data:{
        message:""

      } ,
      updated:function(){
        document.getElementById('content').innerHTML =
          marked(this.message);
      },
      methods:{
        tab_handle:function(e){
           e.preventDefault();
           this.message=this.message+'    ';
        }
      }
  	  

})  
	
	//console.log(marked((app6.message)));

})

