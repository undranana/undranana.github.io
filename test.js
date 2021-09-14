$(document).ready(function () {
	$("div h1").css("background-color", "red");
	$("#test").click(function(){
		//alert("hii");
		$("li").each(function(index, el){
			$(el).css("background-color", "yellow");
			alert("hii");
		})
	})
});	

