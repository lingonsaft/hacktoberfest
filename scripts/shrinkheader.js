
	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
		  $("header").addClass("shrink");
		}
		else
		{
			$("header").removeClass("shrink");
		}
	});
