$(document).ready(function() {
	var $album1photos = (".album1photos")
	var showPage = function() {
		event.preventDefault();

		var $contentDiv= $("."+ $(this).attr("rel"));

		if($contentDiv.hasClass("show")) {
			return;
		} else {
		$contentDiv.siblings().removeClass("show");
		$contentDiv.addClass("show");
		}
	}
	$(".nav a").click(showPage);

	$(".album1photos img").click(function(event) {
		event.preventDefault();
		var $thisPicture = $(this);
		$thisPicture.parent("li").siblings().children().toggleClass("hide");
		$thisPicture.toggleClass("imgBig");
		$("nav").toggleClass("hide")

	});
	$(".album2photos img").click(function(event) {
		event.preventDefault();
		var $thisPicture = $(this);
		$thisPicture.parent("li").siblings().children().toggleClass("hide");
		$thisPicture.toggleClass("imgBig");
		$("nav").toggleClass("hide")

	});
	$(".album3photos img").click(function(event) {
		event.preventDefault();
		var $thisPicture = $(this);
		$thisPicture.parent("li").siblings().children().toggleClass("hide");
		$thisPicture.toggleClass("imgBig");
		$("nav").toggleClass("hide")

	});
});