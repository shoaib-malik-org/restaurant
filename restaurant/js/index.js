$('.cart').on("mouseover",()=>{
    $(".cart-manage").attr("class","col-3 shadow position-absolute cart-manage bg-light rounded py-3");
})
$(".cart").on("mouseout",()=>{
    $(".cart-manage").attr("class","col-3 shadow position-absolute cart-manage bg-light rounded py-3 d-none");
})
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        
      $("nav").attr("class","navbar navbar-expand-lg navbar-light position-fixed top-0 end-0 start-0 bg-light trans")
      for(var i=2;i<8;i++){
        $("nav a").eq(i).attr("class","nav-link text-dark fw-300 ms-4")
      }
      $("nav a").eq(0).attr("class","serif h1 fw-normal text-decoration-none text-dark")
      $("nav button.position-relative").attr("class","bg-none me-5 position-relative text-grey cart mt-3 mt-lg-0")
    } else {
        
        $("nav a").eq(0).attr("class","serif h1 fw-normal text-decoration-none text-light")
        $("nav").attr("class","navbar navbar-expand-lg navbar-dark trans")
        for(var i=2;i<8;i++){
            $("nav a").eq(i).attr("class","nav-link text-light fw-300 ms-4")
        }
        $("nav button.position-relative").attr("class","bg-none me-5 position-relative text-light cart mt-3 mt-lg-0")
    }
}

$(".gal .pointer").on("click",img);
function img(){
  if($( window ).width()>767){
    var id=$(".gal .col-6 img").attr("id");
    $(".gal .col-6 img").attr("src","img/gal"+$(this).attr("id")+".jpg")
    $(".gal .col-6 img").attr("id",$(this).attr("id"));
    $(this).attr('id',id);
    $(this).attr("src","img/gal"+id+".jpg")
  }else{
    var id=$(".gal .w-100.ht-md img").attr("id");
    console.log(id)
    $(".gal .w-100.ht-md img").attr("src","img/gal"+$(this).attr("id")+".jpg")
    $(".gal .w-100.ht-md img").attr("id",$(this).attr("id"));
    $(this).attr('id',id);
    $(this).attr("src","img/gal"+id+".jpg")
  }
    
  
}

$(".menu").on("click",chng)
function chng(){
  $(this).text().slice(1,$(this).text().length)
  if($(this).text().slice(0,1)=='+'){
    $(this).text("– "+$(this).text().slice(1,$(this).text().length))
  }else{
    $(this).text("+ "+$(this).text().slice(1,$(this).text().length))
  }
}

$(".rounded-pill").on("mouseover",anime);
function anime(){
  $(".rounded-pill#"+$(this).attr("id")+" p").attr("class","ht-0 animation-p");
  $(".rounded-pill#"+$(this).attr("id")+" div").attr("class","ht-0 animation-div");
}
$(".rounded-pill").on("mouseout",remanime);
function remanime(){
  $(".rounded-pill#"+$(this).attr("id")+" p").attr("class","ht-0 trans");
  $(".rounded-pill#"+$(this).attr("id")+" div").attr("class","ht-0 rem-anime");
}
