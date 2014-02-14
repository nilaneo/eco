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

});