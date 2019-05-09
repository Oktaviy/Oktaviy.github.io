$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});



$(function() {

	$(".toggle_mnu").click(function() {
			$(".sandwich").toggleClass("active");
	});



	$(".toggle_mnu").click(function() {
			if ($(".top_mnu ul").is(":visible")) {
					$(".top_text").css("opacity", "1");
					$(".top_mnu ul").fadeOut(600);
					$(".top_mnu li a").removeClass("fadeInUp animated");
			} else {
					$(".top_text").css("opacity", ".1");
					$(".top_mnu ul").fadeIn(600);
					$(".top_mnu li a").addClass("fadeInUp animated");
			};
	});

});



	$(".callout a").click(function() {
			if ($(".small_form").is(":visible")) {
					$(".small_form").css("opacity", "1");
					$(".small_form").fadeOut(600);
					$(".small_form").removeClass("fadeInUp animated");
			} else {
					$(".small_form").css("opacity", ".1");
					$(".small_form").fadeIn(600);
					$(".small_form").addClass("fadeInUp animated");
			};
	});







$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  focusOnSelect: true
});

$('.main_slider').slick();