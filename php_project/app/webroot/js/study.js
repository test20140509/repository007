$(function() {
	$('#study_link_id').click(function() {
		//$("p").css( "color", "red" );
		//$("p").css("border", "3px solid red");
		//$(this).css("border", "3px solid red");
		//alert( $(this).css("color") );
		//$(this).css("color", "red"); 
		//$(this).css({"color": "red", "text-decoration": "none" });
		//alert( $("a img").width() );
		//$(this).width("150px");
		//$(this).addClass("current");
		//$(this).attr("target","_blank");
		//$(this).fadeIn('slow');
		//$(this).fadeOut('slow');
		//$("label").show();
		//$("div.actions ul li a").animate({ "height" : "100px" });
		//$("table tbody tr").find("td").css( "color", "red" );
		//$("table tbody tr td").first().css( "color", "red" );
		//$("table tbody tr td").last().css( "color", "red" );
		//$("div.posts.index p").prepend('<a href="#">addData</a>');
		//$("div.posts.index p").append('<a href="#">addData</a>');
		//$("#header").after('<a href="#" style="color: fuchsia;">addData</a>');
		//$("#header").before('<a href="#" style="color: fuchsia;">addData</a>');
		//$(".actions h3").wrap('<div id="wrapper"></div>');
		$(".posts.index h2").remove();
	});
	$(".actions h3").hover(
		function(){
			$(this).css("color","red");
		},
		function(){
			$(this).css("color","blue");
		}
	);
	$('.posts.index h2').hover(
		function() {
			$(this).stop().animate({ "background-position-y" : "0px" }, 500);
		},
		function() {
			$(this).stop().animate({ "background-position-y" : "-80px" }, 100);
		}
	);
});