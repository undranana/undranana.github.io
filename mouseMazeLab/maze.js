$(document).ready(function(){
	$(".boundary")
    .mouseenter(function () {
      $(this).addClass("youlose");
    })
    .mouseleave(function () {
      $(this).removeClass("youlose");
    });
})