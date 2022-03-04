$(".col-12").on("mouseover",row);
function row(){
    $("img").eq($(this).attr("id")).attr("class","h-100 w-100 scale")
    $(this).addClass('shadow s-not')
    $("button.btn-dark").eq($(this).attr("id")).removeClass('d-none')
}
$(".col-12").on("mouseout",rem);
function rem(){
    $("img").eq($(this).attr("id")).attr("class","h-100 w-100 s-not")
    $(this).removeClass('shadow')
    $("button.btn-dark").eq($(this).attr("id")).addClass('d-none')
}
$(".chk").on("click",design)
function design(){
    $(".chk").removeClass('chng');
    $(this).addClass('chng');
    $(".contain").addClass('d-none')
    
    $('.contain').eq(Number($(this).attr("id"))).removeClass('d-none')
}