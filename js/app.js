var numContainers=7;

$(document).foundation()
$(document).ready(function(){
   $(window).scroll(function() {
        var height = $(window).scrollTop();
       if (height==0){
           removeHighlight();
           $("#label_top").addClass("label_highlighted");
           return;
       }
       if (height+$(window).height()>$(document).height()-80){
           removeHighlight();
           $("#label_"+numContainers).addClass("label_highlighted");
           return;
       }
       height+=200;
        for (var i=1; i<=numContainers; i++){
            var pos=$("#container_"+i.toString()).position().top;
            if (height>pos && height-pos<$("#container_"+i.toString()).height()){
                removeHighlight();
                $("#label_"+i.toString()).addClass("label_highlighted");
                break;
            }
        }
    }); 
    $(".nav_label").click(function(){
        $("html, body").animate({
            scrollTop: $("#container_"+$(this).attr('id').charAt(6)).offset().top
        }, 500);
    });
     
});

var removeHighlight=function(){
    $(".nav_label").removeClass("label_highlighted");
}