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
	* Documents and tariffs in the footer
	*/

		var showTab = function(currentTab) {
		var secondTab = (currentTab === "docs" ? "tariffs" : "docs");
		$(".btn-" + currentTab).toggleClass("active");
		$("." + currentTab).slideToggle("fast");
		$(".btn-" + secondTab).removeClass("active");
		$("." + secondTab).slideUp("fast");
		$("html, body").animate({ scrollTop: $(document).height() }, 500);
	};

	$(".btn-docs").on("click", function(e) {
		e.preventDefault();
		showTab("docs");
	});

	$(".btn-tariffs").on("click", function(e) {
		e.preventDefault();
		showTab("tariffs");
	});

	/*
	*	FORM SUBMIT
	*/

	$("form").submit(function(e){
		e.preventDefault();
		if(checkEmpty()){
			var url = 'https://exfront.alfabank.kiev.ua/exfront?';
			var productCode = $("#productCode").val();			 

			var data = {
				'productCode' : productCode,
				'firstNameUkr' : $("#firstname").val(),
				'lastNameUkr' : $("#lastname").val(),
				'partner' : $(".partner").val(),
				'resource' : $(".resource").val()
			}

			$.each(data, function(k,v){
				if(v)
					url += k + '=' + v + '&';
			})
			url+=$(".additional_data").val()+"productType=";
			window.location = url;
		}
	})

	/*
	*	FUNCTION ON CHECKING EMPTY INPUTS
	*/

	function checkEmpty(){
		var error = null;
		var t = null;
		var need = 1;
		var i = 0;

		$("input[type=text]").each(function(){
			t = $(this);
			if( t.val().length==0 || t.val()==t.attr('def') )
				error = 'Будь ласка, заповніть усі поля!';
		})			

		if(error!=null){
			$(".btn-want").attr("title",error);
			$(".btn-want").tooltip({
					content: error,
                    position:{
                        at:"center bottom+10",
                        my:"center top"
                    }
            }).tooltip('open');
            setTimeout(function(){ $(".btn-want").tooltip('disable'); }, 2000);
            return false;
		}else{
			error = null;
			$(".btn-want").attr("title","");
			return true;
		}
	}	
});