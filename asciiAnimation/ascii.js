function start(){
	var i = setInterval(function(){},250);
	var mytextarea = document.getElementById("textarea");
	var chosen = document.getElementById("animations");
	console.log(chosen.options[chosen.selectedIndex]);
	mytextarea.value=ANIMATIONS[chosen.options[chosen.selectedIndex].text];
}