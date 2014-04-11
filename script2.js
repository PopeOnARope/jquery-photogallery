$(document).ready(function(){
	console.log("page is ready")
	var showPage = function() {
		event.preventDefault();

		var $contentDiv = $("." + $(this).attr("rel"));
		

		if ($contentDiv.hasClass('show')) {
			return;
		} else {
			$contentDiv.siblings().removeClass('show');
			$contentDiv.addClass('show');
		}
	}

	$('.nav a').click(showPage);

	// var picBig = function () {
	// 	var $image = (this)

	$('.container2 img').click(function(){
  	$(this).siblings().fadeOut(500);
  	
	$(this).animate({
    	width: '100%'
  		}, 1000);
	
	$(this).click(function() {
		$(this).animate({
			width: '49%'
		}, 1000);
		$(this).siblings().fadeIn(500);
	});	
	});


});