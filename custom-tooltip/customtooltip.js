/**
 * Created by Mateo on 13/10/2014.
 */
(function($){
    //Definición del plugin
    $.fn.customtooltip = function(params){
        params = $.extend({
            fontSize: "10px",
            fontColor: '#000',
            containerWidth: "250px",
            tamper: ',',
            splited:  false,
            wrapper: 'p'
        }, params);

        this.each(function(){
            var $t = $(this);
                var wrapper = "<div id='tooltipWrapper'></div>",
                    text = $t.attr('data-text');
                $t.bind(customTooltip($t, text, wrapper, params));
        });

        //Permitir el encademaniento
        return this;
    };
})(jQuery);

function customTooltip(elemento, text, wrapper, params){
    $(elemento).on('mouseenter', function(){
        if($("#tooltipWrapper").length > 0){
            $("#tooltipWrapper").remove();
        }
        $('body').append(wrapper);
        var newText = buildContent(params, text);
        $('#tooltipWrapper').html(newText).css({
            'font-size': params.fontSize,
            'color': params.fontColor,
            'width': params.containerWidth
        });
        followMouse(params.containerWidth);
    });
    $(elemento).on('mouseleave', function(){
        $('#tooltipWrapper').remove();
        $(document).unbind(followMouse());
    });
}

function buildContent(params, text){
    var newText = "";
    if(params.splited){
        var splitedText = text.split(params.tamper);
        for(var i in splitedText){
            newText += "<"+params.wrapper+">" + splitedText[i] + "</"+params.wrapper+">";
        }
        if(params.wrapper == 'li'){
           newText = '<ul>' + newText + '</ul>';
        }
        return newText;
    }else {
        return text;
    }
}

function followMouse(width){
    $(document).on('mousemove', function(e){
        var $tw = $("#tooltipWrapper"),
            bordT =  $tw.outerWidth() -  $tw.innerWidth(),
            paddT =  $tw.innerWidth() -  $tw.width(),
            margT =  $tw.outerWidth(true) -  $tw.outerWidth(),
            ancho = $tw.width() + bordT + paddT + margT;
        if(e.pageX < ($(window).width() - ancho)){
            $('#tooltipWrapper').css({
                left:  e.pageX + 10,
                top:   e.pageY + 10
            });
        }else{
            $('#tooltipWrapper').css({
                left:  e.pageX - 10 - ancho,
                top:   e.pageY + 10
            });
        }
    });
}