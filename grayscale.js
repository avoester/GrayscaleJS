(function($) {
  $.fn.grayscale = function(myBool) {
		if (myBool) {
			$(this).css({
				"filter": "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\")",
				"filter": "gray",
				"-webkit-filter": "grayscale(100%)",
				"-webkit-backface-visibility": "hidden"
			});
		} else {
			$(this).css({
				"filter": "none",
				"-webkit-filter": "grayscale(0%)"
			});
		}
	}
})(jQuery);
