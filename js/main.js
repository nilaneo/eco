$(function() {
	$(".checkbox").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("checked");
	});

	/*
	* SIMPLE PLACEHOLDERS
	*/

	$("input[type=text]").focus(function(){
		var t = $(this)
		if( t.val()==t.attr('def') ) t.val('')
	});

		$("input[type=text]").blur(function(){
		var t = $(this)
		if( t.val().length==0 ) t.val( t.attr('def') )
	});

	/*
	* SLIDERS
	*/

	var slides = [$(".slide-1"), $(".slide-2"), $(".slide-3")];

	$(".btn-next").on("click", function(e) {
		e.preventDefault();
		slides[0].addClass("is-maximized");
		slides[1].removeClass("is-minified");
		slides[2].removeClass("is-maximized").addClass("is-minified");
		slides.push(slides.shift());
	});

});