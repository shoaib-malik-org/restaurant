$(".rounded-pill").on("mouseover",anime);
function anime(){
    $(".rounded-pill p").attr("class","ht-0 animation-p");
    $(".rounded-pill div").attr("class","ht-0 animation-div");
}
$(".rounded-pill").on("mouseout",remanime);
function remanime(){
    $(".rounded-pill p").attr("class","ht-0 trans");
    $(".rounded-pill div").attr("class","ht-0 rem-anime");
}

$(".chk").on("click",chng);

function chng(){
    $(".chk").attr("class","pointer anime chk")
    $(this).attr("class"," pointer anime chk chng")
}


$(".chk").on("click",change);
function change(){
    $(".all").attr("class","all px-5 d-none")
    $(".all").eq($(this).attr("id")).attr("class","all px-5")

}
$( window ).resize(function() {
    for(var i=0;i<5;i++){
        if($(window).width()<767){
            console.log("shoaib bhaiyeee")
            $(".col-md-6.bg").eq(i).height($(".col-md-6.bg-lorange").eq(i).height()-100)
        }else{
            $(".col-md-6.bg").eq(i).height($(".col-md-6.bg-lorange").eq(i).height())
        }
    }
})
if($(window).width()<767){
    for(var i=0;i<5;i++){
        if($(window).width()<767){
            console.log("shoaib bhaiyeee")
            $(".col-md-6.bg").eq(i).height($(".col-md-6.bg-lorange").eq(i).height()-100)
        }
    }      
}