$(document).ready(function () {
	$puzzleArea = $('#puzzlearea');
	$divs = $("div");
	$("div").each(function(i){
		$x = ((i % 4) * 100) ;
		$y = (Math.floor(i / 4) * 100) ;
		$(this).addClass("puzzlepiece");
		$(this).css({left: $x, top: $y});
		$(this).css('background-image', 'url(background.jpg)');
		$(this).css("background-position", -1 * $x + 'px ' + (-1 * $y) + 'px');
	});
		
});