
function buttonOnClick(){
	//alert("U r doing great!");
	//var inputText = document.getElementById("inputText");
	//var textsize = parseInt(window.getComputedStyle(document.getElementById("inputText")).fontSize);
	//inputText.style.fontSize = 2 * textsize + 'px';
	var i = setInterval(function(){
		var inputText = document.getElementById("inputText");
		var textsize = parseInt(window.getComputedStyle(document.getElementById("inputText")).fontSize);
		inputText.style.fontSize = (2 + textsize) + 'px';
	},500)
	
}
function radioOnClick(){
	if(document.getElementById("bling").checked){
		var inputText = document.getElementById("inputText");
		inputText.style.fontWeight = "bold";
		inputText.style.color = "green";
		inputText.style.textDecoration = "underline";
		
		//document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
		//the provided link is not available
		
	}else{
		document.getElementById("inputText").style.fontWeight="normal";
	}
	
}