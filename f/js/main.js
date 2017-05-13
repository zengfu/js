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
    var font_h=$('#user_input').css("font-size");
    
    $(function () {
    // body...
    $('#red').click(function()
    {
        $(this).animateCss("bounce",function()
        {
            console.log('done');
            $.getJSON("/api/test",function(resp){
                console.log(resp);
            })
        })
    })
    
    $('#user_input').on('input',
        function(event){
                $('#markdown').html(marked($(this).val()));
                
                
        })
    });
    function TextAddStr(el,content){

        var str=el.val();
        var pos=el[0].selectionStart;
        if(pos==str.length)
        {
            el.val(str+content);
        }
        else
        {
            var str1=str.substring(0,pos);
            var str2=str.substring(pos,str.length);
            el.val(str1+content+str2);
            el[0].selectionStart=pos+content.length;
            el[0].selectionEnd=pos+content.length;
        }
    }
    $('#user_input').on(
        'keydown',
        function(event){
            var t_h=$(this).height();
            var line=parseInt(t_h/24);
            var n_l=$(this).val().split('\n').length;
            if(n_l>line-2)
                $(this).height(t_h+24);
            if(event.type=='keydown')
            {
                if(event.which==9)
                {
                    event.preventDefault();
                    TextAddStr($(this),'    ')
                    $(this).trigger("input");
                }                 
            }
            
        }
    )
    
    $.fn.extend({
    animateCss: function (animationName,callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            callback();
        });
    }
});

    
})

