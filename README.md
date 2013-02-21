# GrayscaleJS

Make DOM elements grayscale with jQuery function.

## Usage

**Desaturate element:**

	$("img").grayscale(true);

**Restore colors:**

	$("img").grayscale(false);

## Example

	$("#gallery img").grayscale(true); // initial desaturation
	$("#gallery img").click(function() {
		$("#gallery img").grayscale(true);
		$(this).grayscale(false);
	});
